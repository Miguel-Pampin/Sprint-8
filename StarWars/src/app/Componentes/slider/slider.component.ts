import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit{
  constructor(){}
  images = [  'assets/img1.jpg',  'assets/img2.jpg', 'assets/img3.jpg',  'assets/img4.jpg',  'assets/img5.jpg',  'assets/img6.jpg'];

  currentIndex = 0;
  intervalTime = 3000; 

  ngOnInit(): void {
    setInterval(() => {
      this.moveToNext();
    }, this.intervalTime);
  }
  moveToNext(): void {
    this.currentIndex++;
    if (this.currentIndex === this.images.length) {
      this.currentIndex = 0;
    }
  }
}
