import { resolve } from 'node:path'
// import importPlugin from './app/utils/tailwind/importPlugin'
import headlessUI from '@headlessui/tailwindcss'
import colors from './app/assets/css/colors'
import typography from './app/assets/css/typography'
import daisyUI from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
      '{.,app,*-layer}/components/**/*.{js,vue,ts}',
      '{.,app,*-layer}/layouts/**/*.vue',
      '{.,app,*-layer}/pages/**/*.vue',
      '{.,app,*-layer}/plugins/**/*.{js,ts}',
      '{.,app,*-layer}/app.vue',
      '{.,app,*-layer}/*.{mjs,js,ts}',
      '{.,*-layer}/nuxt.config.{js,ts}',
  ],
  theme: {
    colors: {
      transparent: '#FFFFFF00',
      black: {
        100: '#0c0c0d0d',
        200: '#0c0c0d1a',
        300: '#0c0c0d33',
        400: '#0c0c0d66',
        500: '#0c0c0db2',
        600: '#0c0c0dcc',
        700: '#0c0c0dd9',
        800: '#0c0c0de5',
        900: '#0c0c0df2',
        950: '#0c0c0d'
      },
      white: {
        100: '#ffffff0d',
        200: '#ffffff1a',
        300: '#ffffff33',
        400: '#ffffff66',
        500: '#ffffffb2',
        600: '#ffffffcc',
        700: '#ffffffd9',
        800: '#ffffffe5',
        900: '#fffffff2',
        950: '#ffffff'
      },
      brand: {
        100: '#f5f5f5',
        200: '#e6e6e6',
        300: '#d9d9d9',
        400: '#b3b3b3',
        500: '#757575',
        600: '#444444',
        700: '#383838',
        800: '#2c2c2c',
        900: '#1e1e1e',
        950: '#111111'
      },
      gray: {
        100: '#f5f5f5',
        200: '#e6e6e6',
        300: '#d9d9d9',
        400: '#b3b3b3',
        500: '#757575',
        600: '#444444',
        700: '#383838',
        800: '#2c2c2c',
        900: '#1e1e1e',
        950: '#111111'
      },
      green: {
        100: '#ebffee',
        200: '#cff7d3',
        300: '#aff4c6',
        400: '#85e0a3',
        500: '#14ae5c',
        600: '#009951',
        700: '#008043',
        800: '#02542d',
        900: '#024023',
        950: '#062d1b'
      },
      pink: {
        100: '#fcf1fd',
        200: '#fae1fa',
        300: '#f5c0ef',
        400: '#f19edc',
        500: '#ea3fb8',
        600: '#d732a8',
        700: '#ba2a92',
        800: '#8a226f',
        900: '#57184a',
        950: '#3f1536'
      },
      red: {
        100: '#fee9e7',
        200: '#fdd3d0',
        300: '#fcb3ad',
        400: '#f4776a',
        500: '#ec221f',
        600: '#c00f0c',
        700: '#900b09',
        800: '#690807',
        900: '#4d0b0a',
        950: '#300603'
      },
      yellow: {
        100: '#fffbeb',
        200: '#fff1c2',
        300: '#ffe8a3',
        400: '#e8b931',
        500: '#e5a000',
        600: '#bf6a02',
        700: '#975102',
        800: '#682d03',
        900: '#522504',
        950: '#401b01'
      }
    },
    fontFamily: {
      sans: 'Inter Tight, ui-sans',
      serif: 'IBM Plex Serif, ui-serif'
    },
    fontSize: {
      100: '12px',
      200: '14px',
      300: '16px',
      400: '18px',
      500: '20px',
      600: '24px',
      700: '32px',
      800: '40px',
      900: '48px',
      1000: '60px',
      1100: '72px'
    }
    // colors: {
    //   blue: {
    //     600: '#3B60E8'
    //   },
    //   gray: {
    //     100: '#FFFFFF',
    //     800: '#313235',
    //     900: '#18191B'
    //   }
    // }
  },
  plugins: [
    headlessUI,
    // daisyUI,
    // importPlugin(resolve(__dirname, './app/assets/css/main.css')),
    ({addComponents}) => {

      const colorComponents = transformStyles(colors)
      const typographyComponents = transformStyles(typography)

      function transformStyles(styles) {
        const transformedStyles = {}
      
        Object.keys(styles).forEach((key) => {
          const className = `.${key}`
          transformedStyles[className] = {
            [`@apply ${styles[key]}`]: {},
          }
        })
      
        return transformedStyles
      }

      console.log(colorComponents)
      console.log(typographyComponents)

      // Добавляем новые компоненты в Tailwind
      addComponents(colorComponents)
      addComponents(typographyComponents)

      // addComponents({
      //   '.border-primary': {
      //     '@apply border-gray-300 dark:border-gray-600': {}
      //   },
          
        // '.text-secondary': {
        //   '@apply text-gray-500 dark:text-gray-400': {}
        // },
        // '.text-tertiary': {
        //   '@apply text-gray-400 ': {}
        // }
      // })
    }
  ],
}
