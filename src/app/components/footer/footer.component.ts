import { Component } from '@angular/core';
import { AdditionalInfoComponent } from "../../pages/home/additional-info/additional-info.component";

@Component({
  selector: 'app-footer',
  imports: [AdditionalInfoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
