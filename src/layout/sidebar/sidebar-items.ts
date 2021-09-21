import { InjectionToken } from '@angular/core';

import { MenuItem } from 'primeng/api';

export const SidebarItems = [
  {
    label: 'Series',
    icon: 'pi pi-tags',
  },
  {
    label: 'Comics',
    icon: 'pi pi-inbox',
  },
];

export const SIDEBAR_ITEMS = new InjectionToken<MenuItem[]>(
  'SidebarItemsToken'
);
