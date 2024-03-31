// assets
import { IconBrandChrome, IconUserPlus, IconHelp, IconSitemap } from '@tabler/icons';

// constant
const icons = {
    IconBrandChrome: IconBrandChrome,
    IconHelp: IconHelp,
    IconSitemap: IconSitemap,
    IconUserPlus: IconUserPlus,
};

//-----------------------|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||-----------------------//

export const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'Sign-up Expert',
            title: 'Sign-up Expert',
            type: 'item',
            url: '/pages/register/register3',
            icon: icons['IconUserPlus'],
            breadcrumbs: false
        },
    ]
};
