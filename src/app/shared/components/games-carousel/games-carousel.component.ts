import { Component, Input } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { GameModel } from '../../models/games';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-games-carousel',
  standalone: true,
  imports: [CommonModule, RouterModule, CarouselModule],
  templateUrl: './games-carousel.component.html',
  styleUrl: './games-carousel.component.scss'
})
export class GamesCarouselComponent {
  @Input() games: GameModel[] = []
  @Input() items: number = 4
  @Input() autoplay: boolean = false

  gamesCarouselOptions: OwlOptions = {}

  ngAfterViewInit() {
    this.gamesCarouselOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: true,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: this.items
        }
      },
      nav: false,
      autoplay: this.autoplay
    }
  }
}
