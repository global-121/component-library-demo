import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  output,
} from '@angular/core';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { PersonAffected } from '../../domains/person-affected';
import { Leaves } from '../../utils/helper-types';
import { get } from 'lodash';
import { ChipModule } from 'primeng/chip';
import { CurrencyPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ToastService } from '../../services/toast.service';

export type PeopleAffectedTableColumn = {
  field: NonNullable<Leaves<PersonAffected>>;
  header: string;
  format?: 'chip' | 'currency' | 'text';
} & (
  | {
      type: 'text';
    }
  | { type: 'enum'; options: { value: string; label: string }[] }
);

@Component({
  selector: 'app-people-affected-table',
  standalone: true,
  imports: [
    TableModule,
    MultiSelectModule,
    ChipModule,
    ButtonModule,
    MenuModule,
    CurrencyPipe,
  ],
  providers: [ToastService],
  templateUrl: './people-affected-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleAffectedTableComponent {
  private toastService = inject(ToastService);

  peopleAffected = input.required<PersonAffected[]>();
  totalRecords = input.required<number>();
  columns = input.required<PeopleAffectedTableColumn[]>();
  loading = input(false);

  onFilterChange = output<TableLazyLoadEvent>();

  personAffectedForExtraOptions: PersonAffected | null = null;

  globalFilterFields = computed(() =>
    this.columns().map((column) => column.field),
  );

  contextMenuItems = [
    {
      label: 'View',
      icon: 'pi pi-fw pi-search',
      command: () => {
        this.toastService.showToast({
          detail: `View ${this.personAffectedForExtraOptions?.name ?? 'Person'}`,
        });
      },
    },
    {
      label: 'Delete',
      icon: 'pi pi-fw pi-times',
      command: () => {
        this.toastService.showToast({
          detail: `Delete ${this.personAffectedForExtraOptions?.name ?? 'Person'}`,
          severity: 'warn',
        });
      },
    },
  ];

  getCellValue(
    row: PersonAffected,
    field?: PeopleAffectedTableColumn['field'],
  ) {
    if (!field) throw new Error('Field is required');
    return get(row, field)?.toString();
  }
}
