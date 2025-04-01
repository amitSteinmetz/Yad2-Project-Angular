import { Component,  Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from "./categories/categories.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, CategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  slideImages: string[] = [
    "https://www.yad2.co.il/_next/image?url=https%3A%2F%2Fbraze-images.com%2Fappboy%2Fcommunication%2Fassets%2Fimage_assets%2Fimages%2F67d818325d0beb0065517b54%2Foriginal.jpg%3F1742215217&w=1920&q=75",
    "https://www.yad2.co.il/_next/image?url=https%3A%2F%2Fbraze-images.com%2Fappboy%2Fcommunication%2Fassets%2Fimage_assets%2Fimages%2F67e4312d4e3d6800751ec7ce%2Foriginal.jpg%3F1743008044&w=1920&q=75",
    "https://www.yad2.co.il/_next/image?url=https%3A%2F%2Fbraze-images.com%2Fappboy%2Fcommunication%2Fassets%2Fimage_assets%2Fimages%2F67cda7fcd9b442006411084c%2Foriginal.jpg%3F1741531131&w=1920&q=75"
  ]
  activeSlideImgIndex = 0;
  
  constructor() {
    // setInterval(() => {
    //   this.activeSlideImgIndex = (this.activeSlideImgIndex + 1) % this.slideImages.length;
    // }, 4000)
  }

  onSlideImgButtonClicked(i) {
    this.activeSlideImgIndex = i;
  }
}
