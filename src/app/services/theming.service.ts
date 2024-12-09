import { Injectable, signal } from '@angular/core';

type Theme = {
  name: string;
  background: string;
  primary: string;
  primaryLight: string;
  ripple: string;
  primaryDark: string;
  error: string;
  primaryFontColor: string;
};

@Injectable({
  providedIn: 'root',
})
export class ThemingService {
  primary = signal(this.definedThemes[0].primary);
  primaryLight = signal(this.definedThemes[0].primaryLight);
  primaryDark = signal(this.definedThemes[0].primaryDark);
  background = signal(this.definedThemes[0].background);
  ripple = signal(this.definedThemes[0].ripple);
  error = signal(this.definedThemes[0].error);
  primaryFontColor = signal(this.definedThemes[0].primaryFontColor);

  get definedThemes(): Theme[] {
    return [
      {
        name: 'dark',
        primary: '#FF8C00',
        primaryLight: '#ffb624',
        primaryDark: '#121212',
        background: '#000',
        ripple: '#FF8C001E',
        error: '#FF4500',
        primaryFontColor: '#fff',
      },
      {
        name: 'light',
        primary: '#ff8800',
        primaryLight: '#ffa618',
        primaryDark: '#c9c9c9',
        background: '#ededed',
        ripple: '#FF8C001E',
        error: '#FF4500',
        primaryFontColor: '#000',
      },
    ];
  }

  setPrimary(color: string) {
    this.primary.set(color);
  }

  setPrimaryLight(color: string) {
    this.primaryLight.set(color);
  }

  setPrimaryDark(color: string) {
    this.primaryDark.set(color);
  }

  setRipple(color: string) {
    this.ripple.set(color);
  }

  setBackground(color: string) {
    this.background.set(color);
  }

  setError(color: string) {
    this.error.set(color);
  }

  applyTheme(theme: Theme) {
    const {
      primary,
      primaryLight,
      primaryDark,
      ripple,
      background,
      error,
      primaryFontColor,
    } = theme;

    this.primary.set(primary);
    this.primaryLight.set(primaryLight);
    this.primaryDark.set(primaryDark);
    this.background.set(background);
    this.ripple.set(ripple);
    this.error.set(error);
    this.primaryFontColor.set(primaryFontColor);
  }
}
