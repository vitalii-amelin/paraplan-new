import { Client } from "@notionhq/client"

export default defineEventHandler(async (event) => {    

    const runtimeConfig = useRuntimeConfig()
    const notionApi = runtimeConfig.notionApi
    const leadsBaseId = runtimeConfig.notionLeads
    const contactBaseId = runtimeConfig.notionContacts
    const marketingBaseId = runtimeConfig.notionMarketing

    const notion = new Client({ auth: notionApi })

    const cookies = parseCookies(event)
    
    const utm_source = cookies.utm_source || ''
    const utm_campaign = cookies.utm_campaign || ''
    const utm_medium = cookies.utm_medium || ''
    const utm_term = cookies.utm_term || ''
    const utm_content = cookies.utm_content || ''

    const body = await readBody(event)


    const getCurrentFormattedDate = () => {
        const date = new Date();
        return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    }

    try {

        const newContactPromise = await notion.pages.create({
            parent: {
                type: "database_id",
                database_id: contactBaseId,
            },
            properties: {
                // "Телефон": {
                //     // phone_number: '123-123-123'
                //     phone_number: body.phone
                // },
                "Имя": {
                    title: [
                        {
                            text: {
                            content: body.name,
                            }
                        }
                    ]
                },
                "Telegram": {
                    "url": "https://t.me/" + body.telegram
                }
            }
        })

        const newMarketingDataPromise = await notion.pages.create({
            parent: {
                type: "database_id",
                database_id: marketingBaseId
            },
            properties: {
                "Название": { title: [{ text: { content: getCurrentFormattedDate() } }] },
                URL: { rich_text: [{ text: { content: body.URL } }]},
                form_name: { rich_text: [{ text: { content: body.form_name } }]},
                utm_source: { rich_text: [{ text: { content: utm_source } }]},
                utm_campaign: { rich_text: [{ text: { content: utm_campaign } }]},
                utm_medium: { rich_text: [{ text: { content: utm_medium } }]},
                utm_term: { rich_text: [{ text: { content: utm_term } }]},
                utm_content: { rich_text: [{ text: { content: utm_content } }]},
            }
        })

        const [newContact, newMarketingData] = await Promise.all([newContactPromise, newMarketingDataPromise])
        
        const newLead = await notion.pages.create({
            parent: {
                type: "database_id",
                database_id: leadsBaseId,
            },
            properties: {
                "Статус": {
                    select: {
                        id: "06740eb8-fdbf-4a3b-8706-d24efa61648b"
                    }
                },
                "Приоритет": {
                    select: {
                        id: "8b2fd540-9c53-4522-bbbb-6f1d85787ca3"
                    }
                },
                "Клиент": {
                    relation: [{
                        id: newContact.id
                    }]
                },
                "Маркетинговые данные": {
                    relation: [{
                        id: newMarketingData.id
                    }]
                }
            }
        })
    
        const leadRawId = newLead.properties.ID.unique_id
        const leadName = `${leadRawId.prefix}-${leadRawId.number}`
        notion.pages.update({
            page_id: newLead.id,
            properties: {
                "Название": { title: [{ text: { content: "Сделка #" + leadName } }] }
            }
        })

    } catch (e) {
        console.error(e)
        return "Error"
    }

})