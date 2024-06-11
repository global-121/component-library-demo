import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProgramHeaderComponent } from '../../components/program-header/program-header.component';

@Component({
  selector: 'app-monitoring',
  standalone: true,
  imports: [ProgramHeaderComponent],
  templateUrl: './monitoring.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonitoringComponent {}
