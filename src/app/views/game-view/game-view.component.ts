import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SafeurlPipe } from '../../shared/pipes/safeurl.pipe';
import { GamesService } from '../../shared/services/games.service';
import { GameModel } from '../../shared/models/games';
import { GamesCarouselComponent } from '../../shared/components/games-carousel/games-carousel.component';
import { CategoriesGridComponent } from '../../shared/components/categories-grid/categories-grid.component';

@Component({
  selector: 'app-game-view',
  standalone: true,
  imports: [SafeurlPipe, GamesCarouselComponent, CategoriesGridComponent],
  providers: [GamesService],
  templateUrl: './game-view.component.html',
  styleUrl: './game-view.component.scss'
})
export class GameViewComponent {
  gameUrl: string = ''
  gameCategory: string = ''
  relatedGames: GameModel[] = []
  isLoading: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private gamesService: GamesService) {
    this.gameCategory = this.route.snapshot.params['category']
    this.gameUrl = this.route.snapshot.params['id']
    this.router.events.subscribe((event) => {
      this.gameCategory = this.route.snapshot.params['category']
      this.gameUrl = this.route.snapshot.params['id']
    })
  }

  ngOnInit() {
    this.getRelatedGames()
  }

  getRelatedGames() {
    this.isLoading = true
    this.gamesService.findGamesByFilters({categories: this.gameCategory})
    .subscribe({
      next: (res) => {
        this.relatedGames = res
        this.isLoading = false
      },
      error: (err) => {
        console.error(err.error)
        this.isLoading = false
      }
    });
  }
}
