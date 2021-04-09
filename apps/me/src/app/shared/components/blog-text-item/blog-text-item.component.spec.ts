import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTextItemComponent } from './blog-text-item.component';

describe('BlogTextItemComponent', () => {
  let component: BlogTextItemComponent;
  let fixture: ComponentFixture<BlogTextItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogTextItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogTextItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
