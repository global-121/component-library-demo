import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-program-header',
  standalone: true,
  imports: [TabMenuModule],
  templateUrl: './program-header.component.html',
  styleUrl: './program-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgramHeaderComponent {
  navMenuItems = [
    {
      label: 'Overview | Participants',
    },
    {
      label: 'Payments',
      routerLink: '/', // Just throwing this in there to make one selected by default
    },
    {
      label: 'Monitoring',
    },
  ];
}
