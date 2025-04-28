import { Component} from '@angular/core';
import { UserEntranceFormComponent } from "./user-entrance-form/user-entrance-form.component";

@Component({
  selector: 'app-user-entrance',
  imports: [UserEntranceFormComponent],
  templateUrl: './user-entrance.component.html',
  styleUrl: './user-entrance.component.scss'
})
export class UserEntranceComponent {
 isLoginEntrance: boolean = true; 

  toggleForm() {
    this.isLoginEntrance = !this.isLoginEntrance;
  }


}
