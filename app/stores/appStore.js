import { defineStore } from "pinia";

export const useAppStore = defineStore('AppStore', () => {

    const darkMode = ref(false)
    const themeTransition = ref(false)

    const toggleDarkMode = () => {
        handleTransition(!darkMode.value)
    }

    const darkModeOn = () => {
        handleTransition(true)
    }

    const darkModeOff = () => {
        handleTransition(false)
    }

    const handleTransition = (value) => {

        themeTransition.value = true
        darkMode.value = value

        setTimeout(() => {
            themeTransition.value = false
        }, 300)

    }

    return { darkMode, themeTransition, toggleDarkMode, darkModeOn, darkModeOff }

})