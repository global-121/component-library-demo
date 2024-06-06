import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableLazyLoadEvent } from 'primeng/table';

import { ProgramHeaderComponent } from '../../components/program-header/program-header.component';
import { PaymentDetailsChartComponent } from './components/payment-details-chart/payment-details-chart.component';
import { PersonAffectedService } from '../../services/person-affected.service';
import { PersonAffected } from '../../domains/person-affected';
import {
  PeopleAffectedTableColumn,
  PeopleAffectedTableComponent,
} from '../../components/people-affected-table/people-affected-table.component';
import { ActivityLogComponent } from '../../components/activity-log/activity-log.component';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [
    ProgramHeaderComponent,
    ButtonModule,
    CardModule,
    PaymentDetailsChartComponent,
    PeopleAffectedTableComponent,
    ActivityLogComponent,
  ],
  providers: [ToastService],
  templateUrl: './payment-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentDetailsComponent {
  private personAffectedService = inject(PersonAffectedService);
  private toastService = inject(ToastService);

  peopleAffected = signal<PersonAffected[]>([]);
  totalRecords = signal(0);
  loading = signal(true);

  toastCount = 0;

  paymentHistory = [
    {
      label: 'Payment approved',
      type: 'approved',
      date: '23-05-2022 14:27',
      user: 'financial.officer@redcross.nl',
    },
    {
      label: 'Payment created',
      type: 'created',
      date: '23-05-2022 14:27',
      user: 's.elcabbar@redcross.nl',
    },
    {
      label: 'Payment approved',
      type: 'approved',
      date: '23-05-2022 14:27',
      user: 'financial.officer@redcross.nl',
    },
    {
      label: 'Payment created',
      type: 'created',
      date: '23-05-2022 14:27',
      user: 's.elcabbar@redcross.nl',
    },
    {
      label: 'Payment approved',
      type: 'approved',
      date: '23-05-2022 14:27',
      user: 'financial.officer@redcross.nl',
    },
    {
      label: 'Payment created',
      type: 'created',
      date: '23-05-2022 14:27',
      user: 's.elcabbar@redcross.nl',
    },
  ];

  peopleAffectedTableColumns: PeopleAffectedTableColumn[] = [
    {
      field: 'name',
      header: 'Name',
      type: 'text',
    },
    {
      field: 'country.name',
      header: 'Country',
      type: 'text',
    },
    {
      field: 'company',
      header: 'Company',
      type: 'text',
    },
    {
      field: 'status',
      header: 'Status',
      type: 'enum',
      format: 'chip',
      options: [
        {
          value: 'new',
          label: 'New',
        },
        {
          value: 'qualified',
          label: 'Qualified',
        },
        {
          value: 'proposal',
          label: 'Proposal',
        },
        {
          value: 'unqualified',
          label: 'Unqualified',
        },
      ],
    },
    {
      field: 'balance',
      header: 'Balance',
      type: 'text',
      format: 'currency',
    },
  ];

  async loadPeopleAffected(event: TableLazyLoadEvent) {
    this.loading.set(true);

    const res = await this.personAffectedService.getPeopleAffected({
      lazyEvent: JSON.stringify(event),
    });

    if (!res) {
      throw new Error('Failed to load people affected.');
    }

    this.peopleAffected.set(res.customers);
    this.totalRecords.set(res.totalRecords);
    this.loading.set(false);
  }

  approvePayment() {
    this.toastCount++;
    this.toastService.showToast(
      this.toastCount > 2
        ? {
            severity: 'error',
            detail: 'RESPECT MY AUTHORITAH!',
          }
        : {
            severity: 'warn',
            detail: 'You do not have the authoritah to approve this payment',
          },
    );
  }
}
