import { Icons } from '@/global/icons'

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Project Name',
  description: 'This is a project description.',
  navItems: [
    {
      label: 'Dashboard',
      description: 'Welcome to the dashboard, here you can see all modules that you have created',
      href: '/dashboard',
      icon: Icons.DASHBOARD,
    },
    {
      label: 'Streams',
      description: 'In this page you can see all the streams that you have created',
      href: '/streams',
      icon: Icons.STREAMS,
    },
    {
      label: 'Screens',
      description: 'In this page you can create a new screen with the selected template',
      href: '/screens',
      icon: Icons.SCREENS,
    },
    {
      label: 'Ads',
      description: 'In this section you can create edit and delete ads',
      href: '/ads',
      icon: Icons.ADS,
    },
  ],
}
