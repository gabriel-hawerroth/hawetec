import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { cloudFrontUrl } from '../../../../../../shared/constants';

@Component({
  selector: 'app-profile-cards',
  imports: [NgOptimizedImage],
  templateUrl: './profile-cards.component.html',
  styleUrl: './profile-cards.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileCardsComponent {
  cloudFrontUrl = cloudFrontUrl;

  whatsImgLink = cloudFrontUrl + '/hawetec/whats.webp';
  gmailImgLink = cloudFrontUrl + '/hawetec/gmail.webp';
  linkedinImgLink = cloudFrontUrl + '/hawetec/linkedin.webp';
  githubImgLink = cloudFrontUrl + '/hawetec/github.webp';
}
