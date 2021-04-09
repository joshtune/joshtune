import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ScullyPost } from '../../models/scully-post.interface';
import { ScullyPostService } from '../../services/scully-post.service';

@Component({
  selector: 'ubu-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent {
  blogPosts$: BehaviorSubject<ScullyPost[]> = new BehaviorSubject<ScullyPost[]>(
    []
  );

  constructor(private scully: ScullyPostService) {
    this.scully.getAll().subscribe((post) => {
      console.log(post);
      this.blogPosts$.next(post);
    });
  }
}
