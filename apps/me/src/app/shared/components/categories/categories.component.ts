import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ScullyPostService } from '../../services/scully-post.service';

@Component({
  selector: 'ubu-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  categories$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor(private scully: ScullyPostService) {
    this.scully.getCategories().subscribe((categories) => {
      console.log(categories);
      this.categories$.next(categories);
    });
  }
}
