import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemingService } from './services/theming.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  themingService = inject(ThemingService);

  setTheme = effect(() => {
    if (!this.isBrowser) return;

    document.body.style.setProperty(`--primary`, this.themingService.primary());

    document.body.style.setProperty(
      `--primary-light`,
      this.themingService.primaryLight()
    );

    document.body.style.setProperty(
      `--primary-dark`,
      this.themingService.primaryDark()
    );

    document.body.style.setProperty(
      `--background`,
      this.themingService.background()
    );

    document.body.style.setProperty(`--ripple`, this.themingService.ripple());

    document.body.style.setProperty(`--error`, this.themingService.error());

    document.body.style.setProperty(
      `--primary-font-color`,
      this.themingService.primaryFontColor()
    );
  });
}
