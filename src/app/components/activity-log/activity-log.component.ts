import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';

interface Activity {
  label: string;
  date: string;
  type: string;
  user: string;
}

@Component({
  selector: 'app-activity-log',
  standalone: true,
  imports: [ScrollPanelModule, ButtonModule, ChipModule],
  templateUrl: './activity-log.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityLogComponent {
  activity = input.required<Activity[]>();

  activityWithIcons = computed(() =>
    this.activity().map((activity) => ({
      ...activity,
      icon: this.getIcon(activity.type),
    })),
  );

  getIcon(type: string) {
    switch (type) {
      case 'approved':
        return 'pi pi-thumbs-up';
      case 'created':
        return 'pi pi-money-bill';
      default:
        return 'pi pi-question';
    }
  }
}
