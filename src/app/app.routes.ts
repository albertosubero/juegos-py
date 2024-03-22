import { Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { GameViewComponent } from './views/game-view/game-view.component';
import { CategoryViewComponent } from './views/category-view/category-view.component';
import { SearchResultsViewComponent } from './views/search-results-view/search-results-view.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { PrivacyPolicyComponent } from './views/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'game/:category/:id',
    component: GameViewComponent
  },
  {
    path: 'category/:category_name',
    component: CategoryViewComponent
  },
  {
    path: 'search-game/:keyword',
    component: SearchResultsViewComponent
  }
];
