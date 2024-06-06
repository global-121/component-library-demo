import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-program-header',
  standalone: true,
  imports: [TabMenuModule],
  templateUrl: './program-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgramHeaderComponent {
  navMenuItems = [
    {
      label: 'Overview | Participants',
      routerLink: '/participants',
    },
    {
      label: 'Payments',
      routerLink: '/payments',
    },
    {
      label: 'Monitoring',
      routerLink: '/monitoring',
    },
  ];
}
