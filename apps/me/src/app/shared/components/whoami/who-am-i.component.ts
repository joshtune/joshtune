import { AfterViewChecked, Component } from '@angular/core';
import { HighlightService } from '../../services/highlight.service';

@Component({
  selector: 'ubu-whoami',
  templateUrl: './who-am-i.component.html',
  styleUrls: ['./who-am-i.component.scss'],
})
export class WhoAmIComponent implements AfterViewChecked {
  constructor(private highLightService: HighlightService) {}

  ngAfterViewChecked() {
    this.highLightService.highlightAll();
  }
}
