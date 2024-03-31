// assets
import { IconDashboard, IconChartBar, IconDeviceAnalytics } from '@tabler/icons';

// constant
const icons = {
    IconDashboard: IconDashboard,
    IconChartBar: IconChartBar,
    IconDeviceAnalytics
};

//-----------------------|| DASHBOARD MENU ITEMS ||-----------------------//

export const dashboard = {
    id: 'Feedback',
    title: ' ',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Statistics',
            type: 'item',
            url: '/dashboard/default',
            icon: icons['IconChartBar'],
            breadcrumbs: false
        }
    ]
};
