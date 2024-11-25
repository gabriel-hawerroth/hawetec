import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from '../../header/header.component';
import { ProfileCardsComponent } from './components/profile-cards/profile-cards.component';
import { ProjectButtonsComponent } from './components/project-buttons/project-buttons.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    ProfileCardsComponent,
    ProjectButtonsComponent,
    MatButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private isBrowser: boolean;

  private deferredPrompt: any = null;
  showButton = signal(false);

  constructor() {
    this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      window.addEventListener('beforeinstallprompt', (event: any) => {
        event.preventDefault(); // Evita o prompt automático
        this.deferredPrompt = event; // Salva o evento para usar depois
        this.showButton.set(true); // Exibe o botão
      });
    }
  }

  addToHomeScreen(): void {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt(); // Mostra o prompt
      this.deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Usuário aceitou instalar o PWA');
        } else {
          console.log('Usuário recusou instalar o PWA');
        }
        this.deferredPrompt = null; // Reseta o prompt
        this.showButton.set(false); // Oculta o botão
      });
    }
  }
}
