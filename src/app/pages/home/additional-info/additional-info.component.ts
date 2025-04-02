import { Component } from '@angular/core';
import { AdditionalInfoTableComponent } from "./additional-info-table/additional-info-table.component";
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from "../contact-us/contact-us.component";

@Component({
  selector: 'app-additional-info',
  imports: [AdditionalInfoTableComponent, CommonModule, ContactUsComponent],
  templateUrl: './additional-info.component.html',
  styleUrl: './additional-info.component.scss'
})
export class AdditionalInfoComponent {
  activeCategory: string = "realEstate";

  onCategoryButtonClicked(category: string) {
    this.activeCategory = category;
  }
}
