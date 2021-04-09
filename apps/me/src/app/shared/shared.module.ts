import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightService } from './services/highlight.service';
import { WhoAmIComponent } from './components/whoami/who-am-i.component';
import { RouterModule } from '@angular/router';
import { BlogThumbItemComponent } from './components/blog-thumb-item/blog-thumb-item.component';
import { BlogTextItemComponent } from './components/blog-text-item/blog-text-item.component';
import { BlogFeaturedListComponent } from './components/blog-featured-list/blog-featured-list.component';
import { TagsComponent } from './components/tags/tags.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogListComponent } from './components/blog-list/blog-list.component';

@NgModule({
  declarations: [
    BlogFeaturedListComponent,
    BlogTextItemComponent,
    BlogThumbItemComponent,
    WhoAmIComponent,
    TagsComponent,
    CategoriesComponent,
    BlogListComponent,
  ],
  exports: [
    NgbModule,
    CommonModule,

    BlogFeaturedListComponent,
    BlogTextItemComponent,
    BlogThumbItemComponent,
    WhoAmIComponent,
    CategoriesComponent,
    TagsComponent,
    BlogListComponent,
  ],
  providers: [HighlightService],
  imports: [CommonModule, NgbModule, RouterModule],
})
export class SharedModule {}
