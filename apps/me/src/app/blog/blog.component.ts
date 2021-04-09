import { AfterViewChecked, Component } from '@angular/core';
import { HighlightService } from '../shared/services/highlight.service';

@Component({
  selector: 'ubu-blog',
  template: `
    <ubu-header></ubu-header>
    <div class="container mt-4">
      <scully-content></scully-content>
    </div>
    <ubu-footer></ubu-footer>
  `,
})
export class BlogComponent implements AfterViewChecked {
  constructor(private highLightService: HighlightService) {}

  ngAfterViewChecked() {
    this.highLightService.highlightAll();
  }
}
