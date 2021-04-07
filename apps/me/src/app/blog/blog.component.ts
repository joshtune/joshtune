import { AfterViewChecked, Component } from '@angular/core';
import { HighlightService } from '../shared/services/highlight.service';

@Component({
  selector: 'ubu-blog',
  template: `
    <section>
      <div class="container">
        <scully-content></scully-content>
      </div>
    </section>
  `,
})
export class BlogComponent implements AfterViewChecked {
  constructor(private highLightService: HighlightService) {}

  ngAfterViewChecked() {
    this.highLightService.highlightAll();
  }
}
