import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlogComponent } from './blog.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { LayoutModule } from '../layout/layout.module';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BlogComponent],
        providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
        imports: [AppModule, BlogRoutingModule, ScullyLibModule, LayoutModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
