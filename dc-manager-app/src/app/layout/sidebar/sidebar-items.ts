import { InjectionToken } from '@angular/core';

import { MenuItem } from 'primeng/api';

export const SidebarItems: MenuItem[] = [
  {
    label: 'Series',
    icon: 'pi pi-tags',
    routerLink: ['series'],
  },
  {
    label: 'Comics',
    icon: 'pi pi-inbox',
    routerLink: ['comics'],
  },
];

export const SIDEBAR_ITEMS = new InjectionToken<MenuItem[]>(
  'SidebarItemsToken'
);
