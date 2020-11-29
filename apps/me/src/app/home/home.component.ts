import { Component } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ScullyRoute {
  route: string;
  title?: string;
  slugs?: string[];
  published?: boolean;
  slug?: string;
  sourceFile?: string;
  lang?: string;
  [prop: string]: any;
}

@Component({
  selector: 'ubu-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  blogLinks$: BehaviorSubject<ScullyRoute[]> = new BehaviorSubject<
    ScullyRoute[]
  >([]);

  constructor(private scully: ScullyRoutesService) {
    this.scully.available$
      .pipe(map((links) => links.filter((link) => link?.title?.length)))
      .subscribe((links) => this.blogLinks$.next(links));
  }
}
