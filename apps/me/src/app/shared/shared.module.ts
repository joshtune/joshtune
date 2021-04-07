import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightService } from './services/highlight.service';
import { WhoAmIComponent } from './components/whoami/who-am-i.component';
import { RouterModule } from '@angular/router';
import { BlogListComponent } from './components/blog-list/blog-list.component';

@NgModule({
  declarations: [BlogListComponent, WhoAmIComponent],
  exports: [BlogListComponent, WhoAmIComponent],
  providers: [HighlightService],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
