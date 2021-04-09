import { Component } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ScullyPostService} from "../../services/scully-post.service";

@Component({
  selector: 'ubu-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {

  tags$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(
    []
  );

  constructor(private scully: ScullyPostService) {
    this.scully.getTags().subscribe((tags) => {
      console.log(tags);
      this.tags$.next(tags);
    });
  }

}
