import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatSlideToggle,
  MatSlideToggleChange,
  MatSlideToggleModule,
} from '@angular/material/slide-toggle';
import { ThemingService } from '../../services/theming.service';
import { UtilsService } from '../../services/utils.service';
import { cloudFrontUrl, LS_DARK_THEME_ENABLED } from '../../shared/constants';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule, NgOptimizedImage, MatSlideToggleModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly cloudFrontUrl = cloudFrontUrl;

  private readonly themingService = inject(ThemingService);
  private readonly _utils = inject(UtilsService);

  darkThemeEnabled =
    this._utils.getItemLocalStorage(LS_DARK_THEME_ENABLED) === 'true';
  theme = signal(this.darkThemeEnabled ? 'dark' : 'light');

  constructor() {
    this.onChangeTheme({
      checked: this.darkThemeEnabled,
      source: new MatSlideToggle(),
    });
  }

  onChangeTheme(event: MatSlideToggleChange) {
    this.darkThemeEnabled = event.checked;
    this._utils.setItemLocalStorage(
      LS_DARK_THEME_ENABLED,
      String(this.darkThemeEnabled)
    );

    this.theme.set(this.darkThemeEnabled ? 'dark' : 'light');

    this.themingService.applyTheme(
      this.themingService.definedThemes.find((t) => t.name === this.theme())!
    );
  }
}
