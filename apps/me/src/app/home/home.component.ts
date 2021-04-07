import { AfterViewChecked, Component } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HighlightService } from '../shared/services/highlight.service';

@Component({
  selector: 'ubu-home',
  template: `
    <!--    <section class="d-flex justify-content-center align-items-center">-->
    <!--      <div class="container">-->
    <!--        <ubu-whoami></ubu-whoami>-->
    <!--      </div>-->
    <!--    </section>-->

    <div class="container">
      <ubu-header></ubu-header>
      <ubu-blog-list></ubu-blog-list>
      <ubu-footer></ubu-footer>
    </div>

  `,
})
export class HomeComponent implements AfterViewChecked {
  blogLinks$: BehaviorSubject<ScullyRoute[]> = new BehaviorSubject<
    ScullyRoute[]
  >([]);

  constructor(
    private scully: ScullyRoutesService,
    private highLightService: HighlightService
  ) {
    this.scully.available$
      .pipe(map((links) => links.filter((link) => link?.title?.length)))
      .subscribe((links) => {
        console.log(links);
        this.blogLinks$.next(links);
      });
  }

  ngAfterViewChecked() {
    this.highLightService.highlightAll();
  }
}
