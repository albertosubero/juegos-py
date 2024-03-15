import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { GamesService } from '../../shared/services/games.service';
import { GameModel } from '../../shared/models/games';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-view.component.html',
  styleUrl: './category-view.component.scss'
})
export class CategoryViewComponent {
  gameCategory: string = ''
  games: GameModel[] = []
  page: number = 1
  isLoading: boolean = false
  haveMoreGames: boolean = false

  constructor(private route: ActivatedRoute, private gamesService: GamesService) {
    this.gameCategory = this.route.snapshot.params['category_name']
  }

  ngOnInit() {
    this.getGamesByCategory()
  }

  getGamesByCategory(page: number = 1) {
    this.page = page
    this.isLoading = true

    this.gamesService.findGamesByFilters({categories: this.gameCategory, amount: 9, page})
    .subscribe({
      next: (res) => {
        if (this.games.length > 0) {
          if (res.length == 0) {
            this.haveMoreGames = false
          } else {
            this.games = this.games.concat(res)
            this.haveMoreGames = true
          }     
        } else {
          this.games = res
          this.haveMoreGames = true
        }
        this.isLoading = false
      },
      error: (err) => {
        this.isLoading = false
        console.error(err.error)
      }
    });
  }
}
