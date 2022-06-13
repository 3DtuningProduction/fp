import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
      RouterModule.forRoot(
          [
              {
                  path: '',
                  pathMatch: 'full',
                  loadChildren: () => import('../pages/home/home.component').then((m) => m.HomeComponentModule)
              },
              {
                  path: 'login',
                  loadChildren: () => import('../pages/login/login.component').then((m) => m.LoginComponentModule)
              },
              {
                  path: 'privacy',
                  loadChildren: () => import('../pages/privacy/privacy.component').then((m) => m.PrivacyComponentModule)
              },
              {
                  path: 'terms',
                  loadChildren: () => import('../pages/tesms/tesms.component').then((m) => m.TesmsComponentModule)
              },
              {
                  path: 'search',
                  loadChildren: () => import('../pages/search/search.component').then((m) => m.SearchComponentModule)
              },
              {
                  path: 'order',
                  loadChildren: () => import('../pages/order/order.component').then((m) => m.OrderComponentModule)
              },
              {
                  path: 'car',
                  loadChildren: () => import('../pages/car/car.component').then((m) => m.CarComponentModule)
              }
          ],
          { initialNavigation: 'enabledBlocking' }
      ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
