import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogThumbItemComponent } from './blog-thumb-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared.module';

xdescribe('BlogThumbItemComponent', () => {
  let component: BlogThumbItemComponent;
  let fixture: ComponentFixture<BlogThumbItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogThumbItemComponent],
      imports: [SharedModule, RouterTestingModule],
    }).compileComponents();
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
