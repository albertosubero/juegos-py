import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryInterface, categories } from './helpers/categories';

@Component({
  selector: 'app-categories-grid',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './categories-grid.component.html',
  styleUrl: './categories-grid.component.scss'
})
export class CategoriesGridComponent {
  categories: CategoryInterface[] = categories
}
