import { Routes } from '@angular/router';
import { PaymentsComponent } from './pages/payments/payments.component';
import { PaymentDetailsComponent } from './pages/payment-details/payment-details.component';
import { MonitoringComponent } from './pages/monitoring/monitoring.component';
import { ParticipantsComponent } from './pages/participants/participants.component';

export const routes: Routes = [
  { path: 'payments', component: PaymentsComponent },
  { path: 'payments/:id', component: PaymentDetailsComponent },
  { path: 'participants', component: ParticipantsComponent },
  { path: 'monitoring', component: MonitoringComponent },
  { path: '', redirectTo: '/payments', pathMatch: 'full' },
];
