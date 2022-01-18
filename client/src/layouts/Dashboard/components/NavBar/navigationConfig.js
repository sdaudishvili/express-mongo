import MenuBookIcon from '@material-ui/icons/MenuBook';
import InfoIcon from '@material-ui/icons/Info';
import ContactsIcon from '@material-ui/icons/Contacts';
import EditIcon from '@material-ui/icons/Edit';
import MovieIcon from '@material-ui/icons/Movie';
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

export default [
  {
    title: 'Management',
    pages: [
      {
        title: 'Contact',
        href: '/contact',
        icon: ContactsIcon
      },
      {
        title: 'Social',
        href: '/social',
        icon: InfoIcon
      }
    ]
  },

  {
    title: 'Pages management',
    pages: [
      {
        title: 'Slider',
        href: '/pages',
        icon: MenuBookIcon,
        children: [
          {
            title: 'Browse Slider',
            href: '/pages'
          },
          {
            title: 'Create',
            href: '/pages/create'
          }
        ]
      },
      {
        title: 'Creative Agency',
        href: '/agencies',
        icon: BrandingWatermarkIcon,
        children: [
          {
            title: 'Browse Creative Agency',
            href: '/agencies'
          },
          {
            title: 'Create',
            href: '/agencies/create'
          }
        ]
      },
      {
        title: 'Studio',
        href: '/studios',
        icon: MovieIcon,
        children: [
          {
            title: 'Browse Studio',
            href: '/studios'
          },
          {
            title: 'Create',
            href: '/studios/create'
          }
        ]
      },
      {
        title: 'Merch',
        href: '/merches',
        icon: LoyaltyIcon,
        children: [
          {
            title: 'Browse Merch',
            href: '/merches'
          },
          {
            title: 'Create',
            href: '/merches/create'
          }
        ]
      },
      {
        title: 'About',
        href: '/about',
        icon: EditIcon
      }
    ]
  },
  {
    title: 'User management',
    pages: [
      {
        title: 'Account',
        href: '/account',
        icon: SupervisorAccountIcon
      }
    ]
  }
];
