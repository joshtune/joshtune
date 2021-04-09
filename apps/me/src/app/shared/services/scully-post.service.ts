import { Injectable } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { flatMap, map, pluck } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ScullyPost } from '../models/scully-post.interface';

@Injectable({
  providedIn: 'root',
})
export class ScullyPostService {
  constructor(private scully: ScullyRoutesService) {}

  public getAll(): Observable<ScullyPost[]> {
    return this.scully.available$.pipe(
      map((links) => links.filter((link) => link?.title?.length))
    );
  }

  public getPublished(): Observable<ScullyPost[]> {
    return this.getAll().pipe(
      map((posts) => posts.filter((post) => post.published))
    );
  }

  public getByCategories(categories: string[] = []): Observable<ScullyPost[]> {
    return this.getAll().pipe(
      map((posts) =>
        posts.filter((post) => {
          for (let i = 0; i < categories.length; ++i) {
            let searchCat = categories[i];
            if (post.categories.indexOf(searchCat) !== -1) return true;
          }
          return false;
        })
      )
    );
  }

  public getByTags(tags: string[] = []): Observable<ScullyPost[]> {
    return this.getAll().pipe(
      map((posts) =>
        posts.filter((post) => {
          for (let i = 0; i < tags.length; ++i) {
            let searchTag = tags[i];
            if (post.tags.indexOf(searchTag) !== -1) return true;
          }
          return false;
        })
      )
    );
  }

  public search(searchString: string): Observable<ScullyPost[]> {
    return this.getAll().pipe(
      map((posts) =>
        posts.filter((post) => {
          const titleSearch =
            post.title.toLowerCase().indexOf(searchString.toLowerCase()) > -1;
          const categoriesSearch =
            post.categories
              .join('|')
              .toLowerCase()
              .split('|')
              .indexOf(searchString.toLowerCase()) > -1;
          const tagsSearch =
            post.tags
              .join('|')
              .toLowerCase()
              .split('|')
              .indexOf(searchString.toLowerCase()) > -1;
          return titleSearch || categoriesSearch || tagsSearch;
        })
      )
    );
  }

  public getCategories(): Observable<string[]> {
    return this.getAll().pipe(
      map((posts) => posts.map((post) => post.categories)),
      map((categories) => [].concat(...categories)),
      map((categories) =>
        categories
          .filter((item, index) => categories.indexOf(item) === index)
          .sort()
      )
    );
  }

  public getTags(): Observable<string[]> {
    return this.getAll().pipe(
      map((posts) => posts.map((post) => post.tags)),
      map((tags) => [].concat(...tags)),
      map((tags) =>
        tags.filter((item, index) => tags.indexOf(item) === index).sort()
      )
    );
  }
}
