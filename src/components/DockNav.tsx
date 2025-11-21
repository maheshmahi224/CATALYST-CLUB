import {
  Home,
  Users,
  Calendar,
  Image,
  Award,
  Mail,
  Info,
  HandshakeIcon,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';

const navItems = [
  {
    title: 'Home',
    icon: <Home className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: '#home',
  },
  {
    title: 'About',
    icon: <Info className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: '#about',
  },
  {
    title: 'Team',
    icon: <Users className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: '#team',
  },
  {
    title: 'Events',
    icon: <Calendar className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: '#events',
  },
  {
    title: 'Gallery',
    icon: <Image className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: '#gallery',
  },
  {
    title: 'Certification',
    icon: <Award className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: '#certification',
  },
  {
    title: 'Collaboration',
    icon: <HandshakeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: '#collaboration',
  },
  {
    title: 'Contact',
    icon: <Mail className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: '#contact',
  },
];

export function DockNav() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='fixed bottom-2 left-1/2 max-w-full -translate-x-1/2 z-50'>
      <Dock className='items-end pb-3'>
        {navItems.map((item, idx) => (
          <div key={idx} onClick={() => handleNavClick(item.href)}>
            <DockItem className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 cursor-pointer'>
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          </div>
        ))}
      </Dock>
    </div>
  );
}
