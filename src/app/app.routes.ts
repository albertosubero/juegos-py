import { Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { GameViewComponent } from './views/game-view/game-view.component';
import { CategoryViewComponent } from './views/category-view/category-view.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent
  },
  {
    path: 'game/:category/:id',
    component: GameViewComponent
  },
  {
    path: 'category/:category_name',
    component: CategoryViewComponent
  }
];
