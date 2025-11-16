export default defineAppConfig({
  global: {
    picture: {
      dark: '/logos/logo-puntaprop.png',
      light: '/logos/logo-puntaprop.png',
      alt: 'PuntaProp - La Guía del Real Estate de Punta del Este'
    },
    meetingLink: 'https://www.puntaprop.com/contacto',
    email: 'info@puntaprop.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `PuntaProp • La Guía del Real Estate de Punta del Este • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-facebook',
      'to': 'https://web.facebook.com/Punta-Prop-710854115953117/?modal=admin_todo_tour',
      'target': '_blank',
      'aria-label': 'PuntaProp en Facebook'
    }, {
      'icon': 'i-simple-icons-instagram',
      'to': 'https://www.instagram.com/puntaprop/?hl=es-la',
      'target': '_blank',
      'aria-label': 'PuntaProp en Instagram'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://twitter.com/puntaprop',
      'target': '_blank',
      'aria-label': 'PuntaProp en X (Twitter)'
    }, {
      'icon': 'i-simple-icons-youtube',
      'to': 'https://www.youtube.com/channel/UCmq86kvdpni2_d0wZeRWI9A',
      'target': '_blank',
      'aria-label': 'PuntaProp en YouTube'
    }, {
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://www.linkedin.com/company/puntaprop/?viewAsMember=true',
      'target': '_blank',
      'aria-label': 'PuntaProp en LinkedIn'
    }]
  }
})
