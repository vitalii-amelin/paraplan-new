export default defineEventHandler((event) => {

    const query = getQuery(event)
    
    // проверяем есть ли utm_source или utm_medium
    if (query.hasOwnProperty('utm_source') || query.hasOwnProperty('utm_medium')) {
      setCookie(event, 'utm_source', query.utm_source || '')
      setCookie(event, 'utm_medium', query.utm_medium || '')
      setCookie(event, 'utm_campaign', query.utm_campaign || '')
      setCookie(event, 'utm_term', query.utm_term || '')
      setCookie(event, 'utm_content', query.utm_content || '')
    }

  })