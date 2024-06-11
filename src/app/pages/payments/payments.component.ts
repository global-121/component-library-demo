import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Message } from 'primeng/api';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MenuModule } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { TagModule } from 'primeng/tag';
import { SplitButtonModule } from 'primeng/splitbutton';
import { PaginatorModule } from 'primeng/paginator';

import { ProgramHeaderComponent } from '../../components/program-header/program-header.component';
import { ToastService } from '../../services/toast.service';

interface Payment {
  creationDate: Date;
  participants: number;
  totalPaymentAmount: number;
  successfulTransfers: number;
  failedTransfers: number;
  status: 'Completed' | 'Payment in Progress' | 'Waiting for approval';
}

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [
    FormsModule,
    ButtonModule,
    SelectButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    DropdownModule,
    ProgramHeaderComponent,
    MenuModule,
    DialogModule,
    CardModule,
    TooltipModule,
    TagModule,
    SplitButtonModule,
    PaginatorModule,
  ],
  providers: [ToastService],
  templateUrl: './payments.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentsComponent {
  private toastService = inject(ToastService);

  showToast(message: Message) {
    this.toastService.showToast(message);
  }

  modalVisible = false;

  paymentStatuses = [
    {
      label: 'All payments',
      value: 'all',
    },
    {
      label: 'Waiting for approval',
      value: 'waiting',
    },
    {
      label: 'In progress',
      value: 'in-progress',
    },
    {
      label: 'Completed',
      value: 'completed',
    },
  ];
  selectedPaymentStatus = 'all';

  sortOptions = [
    {
      name: 'Sort By: Last Updated',
      value: 'newest',
    },
    {
      name: 'Sort By: Name',
      value: 'name',
    },
  ];
  selectedSortOption = 'newest';

  downloadOptions = [
    {
      label: 'Unused Vouchers',
      command: () => {
        this.showToast({
          detail: 'You clicked on Unused Vouchers!',
        });
      },
    },
    {
      label: 'Debit Card Usage',
      command: () => {
        this.showToast({
          detail: 'You clicked on Debit Card Usage!',
        });
      },
    },
  ];

  customCreatePaymentOptions = [
    {
      label: 'Create custom payment',
      command: () => {
        this.showToast({
          detail: 'You clicked on Create custom payment!',
        });
      },
    },
  ];

  paymentOptions = [
    {
      label: 'View Payment',
      command: () => {
        this.showToast({
          detail: 'You clicked on View Payment!',
        });
      },
    },
    {
      label: 'Show Summary',
      command: () => {
        this.showToast({
          detail: 'You clicked on Show Summary!',
        });
      },
    },
    {
      label: 'Quick Approve',
      command: () => {
        this.showToast({
          detail: 'You clicked on Quick Approve!',
        });
      },
    },
  ];

  payments: Payment[] = [
    {
      creationDate: new Date(),
      participants: 10,
      totalPaymentAmount: 1000,
      successfulTransfers: 0,
      failedTransfers: 0,
      status: 'Waiting for approval',
    },
    {
      creationDate: new Date(),
      participants: 10,
      totalPaymentAmount: 1000,
      successfulTransfers: 10,
      failedTransfers: 4,
      status: 'Payment in Progress',
    },
    {
      creationDate: new Date(),
      participants: 10,
      totalPaymentAmount: 1000,
      successfulTransfers: 10,
      failedTransfers: 0,
      status: 'Completed',
    },
    {
      creationDate: new Date(),
      participants: 10,
      totalPaymentAmount: 1000,
      successfulTransfers: 10,
      failedTransfers: 0,
      status: 'Completed',
    },
    {
      creationDate: new Date(),
      participants: 10,
      totalPaymentAmount: 1000,
      successfulTransfers: 10,
      failedTransfers: 0,
      status: 'Completed',
    },
    {
      creationDate: new Date(),
      participants: 10,
      totalPaymentAmount: 1000,
      successfulTransfers: 10,
      failedTransfers: 0,
      status: 'Completed',
    },
    {
      creationDate: new Date(),
      participants: 10,
      totalPaymentAmount: 1000,
      successfulTransfers: 10,
      failedTransfers: 0,
      status: 'Completed',
    },
  ];
}
