import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home", component: HomeComponent, title: "לוח יד2 - דירות להשכרה, למכירה, רכב, דרושים, יד שנייה"}
];
