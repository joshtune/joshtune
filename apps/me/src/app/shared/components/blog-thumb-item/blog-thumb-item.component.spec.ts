import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogThumbItemComponent } from './blog-thumb-item.component';

describe('BlogThumbItemComponent', () => {
  let component: BlogThumbItemComponent;
  let fixture: ComponentFixture<BlogThumbItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogThumbItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogThumbItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
