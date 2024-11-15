/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'mobile': {'min': '320px', 'max': '767px'},
        'tablet' : {'min': '768px', 'max': '1199px'},
        'pc': {'min': '1200px'},
      },
      animation: {},
      keyframes: {},
      backgroundImage: {
        'banner-first': 'url(/images/home/banner/background-banner-1.webp)',
      },  
      fontFamily:{
        'regular':['Gilroy'],
        'medium':['Gilroy-Medium'],
        'medium-italic':['Gilroy-MediumItalic'],
        'black': ['Gilroy-Black'],
        'black-italic': ['Gilroy-BlackItalic'],
        'heavy': ['Gilroy-Heavy'],
        'heavy-italic': ['Gilroy-HeavyItalic'],
        'bold': ['Gilroy-Bold'],
        'bold-italic': ['Gilroy-BoldItalic'],
        'light': ['Gilroy-Light'],
        'light-italic': ['Gilroy-LightItalic'],
        'italic': ['Gilroy-Italic'],
        'xbold': ['Gilroy-XBold'],
        'xbold-italic': ['Gilroy-XBoldItalic'],
        'thin': ['Gilroy-Thin'],
        'thin-italic': ['Gilroy-ThinItalic'],
        'xlight': ['Gilroy-XLight'],
        'xlight-italic': ['Gilroy-XLightItalic'],
        'semi':['Gilroy-Semi'],
        'semi-bold':['Gilroy-SemiBold'],
        'semi-bold-italic':['Gilroy-SemiBoldItalic'],
       },
    },
  }
}
