import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  showCategoryList: boolean[] = Array.from({length: 5}, () => false);

  onCategoryListIconClicked(index: number) {
    this.showCategoryList[index] = !this.showCategoryList[index];
  }
}
