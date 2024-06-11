import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProgramHeaderComponent } from '../../components/program-header/program-header.component';

@Component({
  selector: 'app-participants',
  standalone: true,
  imports: [ProgramHeaderComponent],
  templateUrl: './participants.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParticipantsComponent {}
