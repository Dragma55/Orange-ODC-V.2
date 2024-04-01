// assets
import { IconFile, IconCertificate, IconCalendarPlus, IconPlus, IconBoxMultiple, IconMail} from '@tabler/icons';

// constant
const icons = {
    IconCalendarPlus: IconCalendarPlus,
    IconMail: IconMail,
    IconFile: IconFile,
    IconBoxMultiple: IconBoxMultiple,
    IconPlus: IconPlus,
    IconCertificate: IconCertificate
};


export const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'Manage Trainings',
            title: 'Create Training',
            type: 'item',
            url: '/utils/util-typography',
            icon: icons['IconPlus'],
            breadcrumbs: false
        },
        {
            id: 'Manage Sessions',
            title: 'Manage Sessions',
            type: 'item',
            url: '/utils/util-color',
            icon: icons['IconCalendarPlus'],
            breadcrumbs: false
        },
        {
            id: 'Templates',
            title: 'Templates',
            type: 'collapse',
            icon: icons['IconBoxMultiple'],
            children: [
                {
                    id: 'Certificates',
                    title: 'Certificates',
                    type: 'item',
                    url: '/icons/material-icons',
                    icon: icons['IconCertificate'],
                    breadcrumbs: false
                },
                {
                    id: 'Emails',
                    title: 'Email',
                    type: 'item',
                    icon: icons['IconMail'],
                    url: '/icons/tabler-icons',
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
