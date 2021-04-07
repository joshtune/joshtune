import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ScullyRoute } from '../../models/scully-route.interface';
import { ScullyService } from '../../services/scully.service';

@Component({
  selector: 'ubu-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  blogLinks$: BehaviorSubject<ScullyRoute[]> = new BehaviorSubject<
    ScullyRoute[]
  >([]);

  constructor(private scully: ScullyService) {
    this.scully.getAll().subscribe((links) => {
      console.log(links);
      this.blogLinks$.next(links);
    });
  }

  ngOnInit(): void {}
}
