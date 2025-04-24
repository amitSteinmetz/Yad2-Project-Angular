import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { CategoryModalComponent } from "./category-modal/category-modal.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';

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

   constructor (private _router: Router) {}

   onMouseEnterCategory(category) {
    this.activeCategory[category] = true;
   }

   onMouseLeaveCategory(category) {
    this.activeCategory[category] = false;
   }

   get router() {
    return this._router;
   }
}
