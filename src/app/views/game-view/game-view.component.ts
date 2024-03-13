import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { SafeurlPipe } from '../../shared/pipes/safeurl.pipe';

@Component({
  selector: 'app-game-view',
  standalone: true,
  imports: [SafeurlPipe],
  templateUrl: './game-view.component.html',
  styleUrl: './game-view.component.scss'
})
export class GameViewComponent {
  gameUrl: string = ''
  gameCategory: string = ''

  constructor(private route: ActivatedRoute) {
    this.gameCategory = this.route.snapshot.params['category']
    this.gameUrl = this.route.snapshot.params['id'];
  }
}
