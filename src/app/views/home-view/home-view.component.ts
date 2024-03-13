import { Component } from '@angular/core';
import { GamesService } from '../../shared/services/games.service';
import { GamesCarouselComponent } from '../../shared/components/games-carousel/games-carousel.component';
import { GameModel } from '../../shared/models/games';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [GamesCarouselComponent],
  providers: [GamesService],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss'
})
export class HomeViewComponent {
  newGames: GameModel[] = []
  constructor(private gamesService: GamesService) {}

  ngOnInit() { 
    this.gamesService.findGamesByFilters()
    .subscribe({
      next: (res) => {
        this.newGames = res;
        console.log("🚀 ~ HomeViewComponent ~ ngOnInit ~ res:", res)
      },
      error: (err) => {
        console.error(err.error);
      }
    });
  }
}
