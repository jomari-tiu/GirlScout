module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
  
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '44px':'44px',
      '29px':'29px',
      '13px':'13px',
      '14px':'14px',
      '15px':'15px',
      '9px':'9px',
      '32px':'32px',
      '18px':'18px',
      '12px':'12px',
      '20px':'20px',
      '23px':'23px',
      '40px':'40px'
    },
    fontFamily: {
      'openSans': ['Open Sans', 'sans-serif'],
      'overlock':['Overlock', 'cursive'],
      'lato':['Lato', 'sans-serif']
     },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'darkTransparent':'rgba(0, 0, 0, 0.514)',
      'greenTranparent':'rgba(44, 173, 39, 0.479)',
      'liteDrakTransparent':'rgba(51, 51, 51, 0.349)',
      'black':'#000',
      'lightGreen':'#009944',
      'violet':'#771f6c',
      'blueGreen':'#1cbbb4',
      'lightOrange':'#f7841d',
      'lightPink':'#ec3987',
      'liteYellow':'#eecc2e ',
      'btnbg':'#61ce70',
      'weShare':'#ec3987',
      'memoryLane':'#f7941d',
      'beyond':'#771f6c',
      'mustard':'#f7941d',
      'cadet':'#ff38b7',
      'senior':'#ece675',
      'blackk':'#000000',
      'junior':' #fda500',
      'star':'#fd5403',
      'twinkler':'#8701a5',
      'iconbg':'#23A455',
      'darkpurple':'#771f6c',
      'camps':'#771f6c',
      'programs':'#ec3987',
      'traning':'#f7941d',
      'membership':'#eecc2e'
      
     }),
    borderRadius: {
      '100pxSide':'100px 0 0 100px',
      '100pxUp':'100px 100px 0px 0',
      '70%':'0 0 70% 0',
      'none': '0',
      'sm': '0.125rem',
      '50%': '50%',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
    screens: {
      'xs':'300px',
      'mobile':'400px',
      'mobile2':'600px',
      'tablet': '900px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      spacing:{
        '23%':'23%',
        '48%':'48%',
        '1350px':'1350px',
        '20%':'20%',
        '44px':'44px',
        '251.29px':'251.29px'
      },  
      width: {
        '1/7': '14.2857143%',
        '2/7': '23%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        '251.29px':'251.29px'

      },
      colors:{
        'pink':'#fc506b',
        'activeText':'#1bd333',
        'activePink':'#cc3366',
        'junior':' #fda500',
        'senior':'#ece675',
        'star':'#fd5403',
        'twinkler':'#8701a5',
        'cadet':'#ff38b7'
      },


      boxShadow:{
        'boxShadow':'0 10px 15px 0 rgb(168, 168, 168)',
        'arrowShadow':'15px 10px 15px 0 rgba(87, 87, 87, 0.514)',
        '2ndbox':'0 10px 15px 0 rgb(92, 92, 92, 0.404)',
        'pageSpeed':'15px 15px 10px 0px rgba(99, 99, 99, 0.459)'
      },
      height:{
        '22vh':'22vh',
        '78vh':'78vh',
        '25vh':'25vh',
        '75vh':'75vh',
        '600px':'600px',
        '500px':'500px',
        '300px':'300px',
        '200px':'200px',
        '400px':'400px',
        '95%':'95%',
        '15vh':'15vh',
        '44px':'44px'
      },
      width:{
        '400px':'400px',
        '90%':'90%',
        '300px':'300px'
      },
      fontSize:{
        '9px':'9px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
