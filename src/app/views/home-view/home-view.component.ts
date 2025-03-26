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
  styleUrl: './home-view.component.scss',
})
export class HomeViewComponent {
  newGames: GameModel[] = [];
  newGames2: GameModel[] = [];
  hotGames: GameModel[] = [];
  isLoading: boolean = false;

  constructor(private gamesService: GamesService) {}

  ngOnInit() {
    this.getNewGames();
    this.getHotGames();
  }

  getNewGames() {
    this.isLoading = true;
    this.gamesService
      .findGamesByFilters({ collection: 'All', amount: 40 })
      .subscribe({
        next: (res) => {
          const half = Math.ceil(res.length / 2);
          this.newGames = res.slice(10, half);
          this.newGames2 = res.slice(half);
          this.isLoading = false;
        },
        error: (err) => {
          console.error(err.error);
          this.isLoading = false;
        },
      });
  }

  getHotGames() {
    this.isLoading = true;
    this.gamesService.findGamesByFilters({ collection: 'All' }).subscribe({
      next: (res) => {
        this.hotGames = res;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err.error);
        this.isLoading = false;
      },
    });
  }
}
