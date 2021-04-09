import { AfterViewChecked, Component } from '@angular/core';
import { HighlightService } from '../shared/services/highlight.service';

@Component({
  selector: 'ubu-home',
  template: `
    <ubu-header></ubu-header>
    <div class="container mt-4">
      <ubu-blog-featured-list></ubu-blog-featured-list>
      <ubu-blog-list></ubu-blog-list>
    </div>
    <ubu-footer></ubu-footer>
  `,
})
export class HomeComponent implements AfterViewChecked {
  constructor(private highLightService: HighlightService) {}

  ngAfterViewChecked() {
    this.highLightService.highlightAll();
  }
}
