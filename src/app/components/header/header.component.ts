import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { CategoryModalComponent } from "./category-modal/category-modal.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CategoryModalComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
   activeCategory = {
    realEstate: false,
    newApartmants: false,
    vehicles: false,
    yad2: false,
    needed: false,
    business: false,
    pets: false,
    jobs: false
   }
   @Output() category_hovered: EventEmitter<void> = new EventEmitter();

   onMouseEnterCategory(category) {
    this.category_hovered.emit();
    this.activeCategory[category] = true;
   }
   onMouseLeaveCategory(category) {
    this.activeCategory[category] = false;
   }
}
