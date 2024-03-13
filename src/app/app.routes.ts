import { Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { GameViewComponent } from './views/game-view/game-view.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent
  },
  {
    path: 'game/:category/:id',
    component: GameViewComponent
  }
];
