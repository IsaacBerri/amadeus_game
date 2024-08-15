import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mockItems } from './mock-data';

@Component({
  selector: 'app-carrousel-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrousel-img.component.html',
  styleUrl: './carrousel-img.component.scss',
})
export class CarrouselImgComponent implements OnInit, OnDestroy {
  items = mockItems;

  currentIndex = 0;
  intervalId: any;
  userInteractionTimeout: any;

  constructor() {}

  ngOnInit(): void {
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  startTimer(): void {
    this.intervalId = setInterval(() => {
      this.next();
    }, 3000);
  }

  stopTimer(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  prev(): void {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.items.length - 1;
    console.log({ currentIndex: this.currentIndex });
  }

  next(): void {
    this.currentIndex =
      this.currentIndex < this.items.length - 1 ? this.currentIndex + 1 : 0;
    console.log({ currentIndex: this.currentIndex });
  }
}
