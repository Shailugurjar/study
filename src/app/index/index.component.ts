import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css',]
})
export class IndexComponent {

  courses  = [
    {
      image: 'assets/img/courses-1.jpg',
      text: 'Web design & development courses for beginners',
      author: 'John Doe',
      rating: 4.5,
      reviews: 250,
    },
    {
      image: 'assets/img/courses-2.jpg',
      text: 'Web design & development courses for beginners',
      author: 'John Doe',
      rating: 4.5,
      reviews: 250,
    },
    {
      image: 'assets/img/courses-3.jpg',
      text: 'Web design & development courses for beginners',
      author: 'John Doe',
      rating: 4.5,
      reviews: 250,
    },
    {
      image: 'assets/img/courses-4.jpg',
      text: 'Web design & development courses for beginners',
      author: 'John Doe',
      rating: 4.5,
      reviews: 250,
    },
    {
      image: 'assets/img/courses-5.jpg',
      text: 'Web design & development courses for beginners',
      author: 'John Doe',
      rating: 4.5,
      reviews: 250,
    },
    {
      image: 'assets/img/courses-6.jpg',
      text: 'Web design & development courses for beginners',
      author: 'John Doe',
      rating: 4.5,
      reviews: 250,
    },
    
  ];
  images = [
    'assets/img/courses-1.jpg',
    'assets/img/courses-2.jpg',
    'assets/img/courses-3.jpg',
    'assets/img/courses-4.jpg',
    'assets/img/courses-5.jpg',
    'assets/img/courses-6.jpg',
    // Add more image paths as needed
  ];
  menuItems = [
    { name: 'Option 1', options: ['Option 1A', 'Option 1B', 'Option 1C'] },
    { name: 'Option 2', options: ['Option 2A', 'Option 2B', 'Option 2C'] },
    { name: 'Option 3', options: ['Option 3A', 'Option 3B', 'Option 3C'] }
  ];

  activeItem: any;
showMenu: any;

  setActive(item: any) {
    this.activeItem = item;
  }
  carouselOptions = {
    items: 4,
    loop: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  };

  ngOnInit() {
    // You can customize the options based on your requirements
  }
}
