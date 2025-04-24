import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserEntranceComponent } from './pages/user-entrance/user-entrance.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home", component: HomeComponent, title: "לוח יד2 - דירות להשכרה, למכירה, רכב, דרושים, יד שנייה"},
    {path: "user-entrance", component: UserEntranceComponent, title: "התחברות ביד2"}
    // {path: "**", component: PageNotFoundComponent, title: "דף לא נמצא"}
];
