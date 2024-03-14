import { Component } from '@angular/core';
import { GamesService } from '../../shared/services/games.service';
import { GamesCarouselComponent } from '../../shared/components/games-carousel/games-carousel.component';
import { GameModel } from '../../shared/models/games';
import { CategoriesGridComponent } from '../../shared/components/categories-grid/categories-grid.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [GamesCarouselComponent, CategoriesGridComponent],
  providers: [GamesService],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss'
})
export class HomeViewComponent {
  newGames: GameModel[] = []
  hotGames: GameModel[] = []

  constructor(private gamesService: GamesService) {}

  ngOnInit() { 
    this.gamesService.findGamesByFilters({collection: '4'})
    .subscribe({
      next: (res) => {
        this.newGames = res;
      },
      error: (err) => {
        console.error(err.error);
      }
    });

    this.gamesService.findGamesByFilters({collection: '3'})
    .subscribe({
      next: (res) => {
        this.hotGames = res;
      },
      error: (err) => {
        console.error(err.error);
      }
    });
  }
}
