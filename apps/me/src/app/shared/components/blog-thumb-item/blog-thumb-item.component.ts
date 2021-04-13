import { Component, Input } from '@angular/core';
import { ScullyPost } from '../../models/scully-post.interface';

@Component({
  selector: 'ubu-blog-thumb-item',
  templateUrl: './blog-thumb-item.component.html',
  styleUrls: ['./blog-thumb-item.component.scss'],
})
export class BlogThumbItemComponent {
  @Input() post: ScullyPost;
}
