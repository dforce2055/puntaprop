import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: 'Inicio',
  icon: 'i-lucide-home',
  to: '/'
}, {
  label: 'Sitio Actual',
  icon: 'i-lucide-external-link',
  to: 'https://www.puntaprop.com',
  target: '_blank'
}, {
  label: 'Contacto',
  icon: 'i-lucide-mail',
  to: 'mailto:info@puntaprop.com'
}
]
