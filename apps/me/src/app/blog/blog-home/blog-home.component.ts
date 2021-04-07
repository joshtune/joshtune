import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ScullyService } from '../../shared/services/scully.service';
import { ScullyRoute } from '../../shared/models/scully-route.interface';

@Component({
  selector: 'ubu-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss'],
})
export class BlogHomeComponent {
  blogLinks$: BehaviorSubject<ScullyRoute[]> = new BehaviorSubject<
    ScullyRoute[]
  >([]);

  constructor(private scully: ScullyService) {
    this.scully.getAll().subscribe((links) => this.blogLinks$.next(links));
  }
}
