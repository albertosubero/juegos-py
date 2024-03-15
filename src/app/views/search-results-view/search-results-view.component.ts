import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { GamesService } from '../../shared/services/games.service';
import { GameModel } from '../../shared/models/games';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-results-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './search-results-view.component.html',
  styleUrl: './search-results-view.component.scss'
})
export class SearchResultsViewComponent {
  games: GameModel[] = []
  keyword: string = ''
  page: number = 1
  isLoading: boolean = false
  haveMoreGames: boolean = false

  constructor(private route: ActivatedRoute, private router: Router, private gamesService: GamesService) {
    this.keyword = this.route.snapshot.params['keyword']
    this.router.events.subscribe((event) => {
      if (this.keyword != this.route.snapshot.params['keyword']) {
        this.keyword = this.route.snapshot.params['keyword']
        this.getGamesByKeyword()
      }
    })

    this.getGamesByKeyword()

  }

  ngOnInit() {
    this.getGamesByKeyword()
  }

  getGamesByKeyword(page: number = 1) {    
    this.page = page
    this.isLoading = true

    this.gamesService.findGamesByFilters({tags: this.keyword, amount: 24, page})
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
        console.error(err.error)
        this.isLoading = false
      }
    });
  }
}
