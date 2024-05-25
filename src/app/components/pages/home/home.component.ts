import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { ProfileCardsComponent } from './components/profile-cards/profile-cards.component';
import { ProjectButtonsComponent } from './components/project-buttons/project-buttons.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProfileCardsComponent, ProjectButtonsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
