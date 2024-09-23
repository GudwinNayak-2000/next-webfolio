import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors'
const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      center:true,
      padding:{
        DEFAULT:'2rem',
        'xs': '0rem',
        'sm': '0rem',
        'md': '0rem',
        'lg': '0rem',
        'xl': '4rem',
        '2xl': '4rem',
      },
      screens:{
        'xs':'320px',
        'sm':'575px',
        'md':'768px',
        'lg':'1024px',
        'xl':'1280px',
        '2xl':'1440px',
      },
    },
    colors:{
      'slate':colors.slate,
      'amber':colors.amber,
      'pink':colors.pink,
      'sky':colors.sky,
      'white':colors.white,
      'black':colors.black,
      'red': colors.red,
      'transparent':colors.transparent,
      'dark':'#0c1222',
       'green':colors.green,
      'gray': colors.gray,
      'primary': {
        '50': '#fdf2f7',
        '100': '#fce7f0',
        '200': '#fccee2',
        '300': '#fba6ca',
        '400': '#f76fa6',
        '500': '#ef4585',
        '600': '#df2662',
        '700': '#c11547',
        '800': '#a0143b',
        '900': '#851636',
        '950': '#51061b',
     },
     'secondary': {
        '50': '#fff6ed',
        '100': '#ffebd5',
        '200': '#fed2aa',
        '300': '#fdb274',
        '400': '#fc873b',
        '500': '#fa6d21',
        '600': '#eb4b0b',
        '700': '#c3360b',
        '800': '#9a2c12',
        '900': '#7c2712',
        '950': '#431007',
    },
    },
    divider:{
      light:colors.slate[200],
      dark:colors.slate[800]
    },
    extend:{
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.10em',
        wider: '.50em',
        widest: '1.20em',
      },

      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '4.052rem',
        '7xl': '5.052rem',
      },

      lineHeight:{
        
      },
      keyframes:{

      },
      animation:{

      }
    }
  },
  plugins: [require("tailwindcss-animate") ,require('tailwindcss-accent')({
    colors: ['violet', 'blue','red'],
    root: 'red',
    cssVarsPrefix: 'tw-plugin',
  }),],
};
export default config;
