import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MenuModule } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { TagModule } from 'primeng/tag';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { PaginatorModule } from 'primeng/paginator';

import { ProgramHeaderComponent } from '../../components/program-header/program-header.component';
import { MessageService } from 'primeng/api';

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
    OverlayPanelModule,
    MenuModule,
    DialogModule,
    CardModule,
    TooltipModule,
    TagModule,
    SplitButtonModule,
    ToastModule,
    PaginatorModule,
  ],
  providers: [MessageService],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentsComponent {
  private messageService = inject(MessageService);
  showToast({ message, severity }: { severity?: string; message?: string }) {
    this.messageService.add({
      severity: severity ?? 'success',
      summary: severity === 'error' ? 'Error' : 'Success',
      detail: message ?? 'Something happened!',
    });
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
        this.showToast({ message: 'You clicked on Unused Vouchers!' });
      },
    },
    {
      label: 'Debit Card Usage',
      command: () => {
        this.showToast({ message: 'You clicked on Debit Card Usage!' });
      },
    },
  ];

  customCreatePaymentOptions = [
    {
      label: 'Create custom payment',
      command: () => {
        this.showToast({ message: 'You clicked on Create custom payment!' });
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
