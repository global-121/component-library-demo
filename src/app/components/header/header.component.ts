import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, ToolbarModule, SidebarModule],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  sidebarVisible = false;

  toggleRTL() {
    // A bit hacky but it works and it's just for the demo
    const url = new URL(window.location.href);
    const isRtl = document.documentElement.dir === 'rtl';
    url.searchParams.set('rtl', isRtl ? '0' : '1');
    window.location.href = url.toString();
  }
}
