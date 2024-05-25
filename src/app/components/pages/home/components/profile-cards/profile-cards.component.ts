import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-profile-cards',
  standalone: true,
  imports: [],
  templateUrl: './profile-cards.component.html',
  styleUrl: './profile-cards.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileCardsComponent {}
