import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFeaturedListComponent } from './blog-featured-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

xdescribe('BlogFeaturedListComponent', () => {
  let component: BlogFeaturedListComponent;
  let fixture: ComponentFixture<BlogFeaturedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogFeaturedListComponent],
      imports: [RouterTestingModule, NgbModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFeaturedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
