import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SafeurlPipe } from '../../shared/pipes/safeurl.pipe';
import { GamesService } from '../../shared/services/games.service';
import { GameModel } from '../../shared/models/games';
import { GamesCarouselComponent } from '../../shared/components/games-carousel/games-carousel.component';

@Component({
  selector: 'app-game-view',
  standalone: true,
  imports: [SafeurlPipe, GamesCarouselComponent],
  providers: [GamesService],
  templateUrl: './game-view.component.html',
  styleUrl: './game-view.component.scss'
})
export class GameViewComponent {
  gameUrl: string = ''
  gameCategory: string = ''
  relatedGames: GameModel[] = []

  constructor(private route: ActivatedRoute, private gamesService: GamesService) {
    this.gameCategory = this.route.snapshot.params['category']
    this.gameUrl = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.getRelatedGames()
  }

  getRelatedGames() {
    this.gamesService.findGamesByFilters({categories: this.gameCategory})
    .subscribe({
      next: (res) => {
        this.relatedGames = res;
      },
      error: (err) => {
        console.error(err.error);
      }
    });
  }
}
