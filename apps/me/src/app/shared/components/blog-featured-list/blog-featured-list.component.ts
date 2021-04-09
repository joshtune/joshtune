import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ScullyPost} from "../../models/scully-post.interface";
import {ScullyPostService} from "../../services/scully-post.service";

@Component({
  selector: 'ubu-blog-featured-list',
  templateUrl: './blog-featured-list.component.html',
  styleUrls: ['./blog-featured-list.component.scss']
})
export class BlogFeaturedListComponent implements OnInit {

  blogPosts$: BehaviorSubject<ScullyPost[]> = new BehaviorSubject<ScullyPost[]>(
    []
  );

  constructor(private scully: ScullyPostService) {
    this.scully.getAll().subscribe((post) => {
      console.log(post);
      this.blogPosts$.next(post);
    });
  }

  ngOnInit(): void {
  }

}
