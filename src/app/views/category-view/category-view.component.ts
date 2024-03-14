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

  constructor(private route: ActivatedRoute, private gamesService: GamesService) {
    this.gameCategory = this.route.snapshot.params['category_name']
  }

  ngOnInit() {
    this.getGamesByCategory()
  }

  getGamesByCategory() {
    this.gamesService.findGamesByFilters({categories: this.gameCategory})
    .subscribe({
      next: (res) => {
        this.games = res;
      },
      error: (err) => {
        console.error(err.error);
      }
    });
  }
}
