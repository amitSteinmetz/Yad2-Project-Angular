import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-additional-info-table',
  imports: [CommonModule],
  templateUrl: './additional-info-table.component.html',
  styleUrl: './additional-info-table.component.scss'
})
export class AdditionalInfoTableComponent {
  @Input() chosenCategory: string;
}
