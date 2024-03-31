// assets
import { IconFile, IconCertificate, IconCalendar, IconMenu, IconBoxMultiple, IconMail} from '@tabler/icons';

// constant
const icons = {
    IconCalendar: IconCalendar,
    IconMail: IconMail,
    IconFile: IconFile,
    IconBoxMultiple: IconBoxMultiple,
    IconMenu: IconMenu,
    IconCertificate: IconCertificate
};


export const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'Manage Trainings',
            title: 'Manage Trainings',
            type: 'item',
            url: '/utils/util-typography',
            icon: icons['IconMenu'],
            breadcrumbs: false
        },
        {
            id: 'Manage Sessions',
            title: 'Manage Sessions',
            type: 'item',
            url: '/utils/util-color',
            icon: icons['IconMenu'],
            breadcrumbs: false
        },
        {
            id: 'Calendar',
            title: 'Calendar',
            type: 'item',
            url: '/utils/util-shadow',
            icon: icons['IconCalendar'],
            breadcrumbs: false
        },
        {
            id: 'Templates',
            title: 'Templates',
            type: 'collapse',
            icon: icons['IconBoxMultiple'],
            children: [
                {
                    id: 'Emails',
                    title: 'Email',
                    type: 'item',
                    icon: icons['IconMail'],
                    url: '/icons/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'Certificates',
                    title: 'Certificates',
                    type: 'item',
                    url: '/icons/material-icons',
                    icon: icons['IconCertificate'],
                    breadcrumbs: false
                },
                {
                    id: 'Forms',
                    title: 'Forms',
                    type: 'item',
                    icon: icons['IconFile'],
                    url: '/icons/tabler-icons',
                    breadcrumbs: false
                },
            ]
        }
    ]
};
