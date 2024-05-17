import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PaymentpageComponent } from './pages/paymentpage/paymentpage.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'payment', component: PaymentpageComponent },
];
