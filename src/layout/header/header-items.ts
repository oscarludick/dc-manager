import { InjectionToken } from '@angular/core';

import { MenuItem } from 'primeng/api';

export const HeaderItems: MenuItem[] = [{ label: 'DC Manager' }];

export const HEADER_ITEMS = new InjectionToken<MenuItem[]>('HeaderItemsToken');
