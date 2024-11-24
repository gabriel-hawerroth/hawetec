import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-profile-cards',
  imports: [NgOptimizedImage],
  templateUrl: './profile-cards.component.html',
  styleUrl: './profile-cards.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileCardsComponent {
  cloudFrontUrl = 'https://ddmv7vg76tda1.cloudfront.net';
}
