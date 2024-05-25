import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-project-buttons',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './project-buttons.component.html',
  styleUrl: './project-buttons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectButtonsComponent {}
