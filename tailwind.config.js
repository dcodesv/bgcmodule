module.exports = {
    theme: {
      extend:{
        colors:{
          greenbgc: {
            900: '#7CB342',
            800: '#96C267',
            700: '#A3C97A',
            600: '#B0D18D',
            500: '#BDD9A0',
            400: '#CAE1B3',
            300: '#D7E8C6',
            200: '#E5F0D9',
            100: '#F2F7EB'
          },
          graybgc:'#EDEFF0',
          graybgcmedium: "#BDBFC0",
          graybgcdark: '#9D9FA0'
        }
      },
      fontFamily: {
        roboto:'Roboto'
      },
      transitionProperty: { // defaults to these values
        'none': 'none',
        'all': 'all',
        'color': 'color',
        'bg': 'background-color',
        'border': 'border-color',
        'colors': ['color', 'background-color', 'border-color'],
        'opacity': 'opacity',
        'transform': 'transform',
      },
      transitionDuration: { // defaults to these values
        'default': '250ms',
        '0': '0ms',
        '100': '100ms',
        '250': '250ms',
        '500': '500ms',
        '750': '750ms',
        '1000': '1000ms',
      },
      transitionTimingFunction: { // defaults to these values
        'default': 'ease',
        'linear': 'linear',
        'ease': 'ease',
        'ease-in': 'ease-in',
        'ease-out': 'ease-out',
        'ease-in-out': 'ease-in-out',
      },
      transitionDelay: { // defaults to these values
        'default': '0ms',
        '0': '0ms',
        '100': '100ms',
        '250': '250ms',
        '500': '500ms',
        '750': '750ms',
        '1000': '1000ms',
      },
      willChange: { // defaults to these values
        'auto': 'auto',
        'scroll': 'scroll-position',
        'contents': 'contents',
        'opacity': 'opacity',
        'transform': 'transform',
      },
    },
    variants: { // all the following default to ['responsive']
      transitionProperty: ['responsive'],
      transitionDuration: ['responsive'],
      transitionTimingFunction: ['responsive'],
      transitionDelay: ['responsive'],
      willChange: ['responsive'],
    },
    plugins: [
      require('tailwindcss-transitions')(),
    ],
  };