import {
  fakeAsync,
  flushMicrotasks,
  TestBed,
  tick,
} from '@angular/core/testing';

import { ScullyPostService } from './scully-post.service';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { ScullyLibModule, ScullyRoutesService } from '@scullyio/ng-lib';
import { of } from 'rxjs';
import { ScullyPost } from '../models/scully-post.interface';

describe('ScullyPostService', () => {
  let service: ScullyPostService;
  let scullyService: ScullyRoutesService;
  let samplePosts: ScullyPost[] = [
    {
      route: '/blog/2020-05-22-javascript-coding-best-practice',
      title: 'JavaScript Coding Best Practice',
      published: true,
      categories: ['tips', 'hello'],
      tags: ['javascript'],
    },
    {
      route: '/blog/2020-04-02-ruby-coding-best-practice',
      title: 'Ruby Coding Best Practice',
      published: true,
      categories: ['patterns', 'tips'],
      tags: ['ruby', 'hello'],
    },
    {
      route: '/blog/2020-04-02-angular-coding-best-practice',
      title: 'Angular Coding Best Practice, Hello',
      published: false,
      categories: [],
      tags: ['angular'],
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, RouterModule.forRoot([]), ScullyLibModule],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        {
          provide: ScullyRoutesService,
          useValue: {
            setAvailable: (value) => {
              scullyService.available$ = value;
            },
            available$: of(samplePosts),
          },
        },
      ],
    }).compileComponents();

    service = TestBed.inject(ScullyPostService);
    scullyService = TestBed.inject(ScullyRoutesService);
  });

  describe('getAll', () => {
    it('will return all posts', fakeAsync(() => {
      service
        .getAll()
        .subscribe((response: ScullyPost[]) =>
          expect(response.length).toEqual(3)
        );
    }));
  });

  describe('getPublished', () => {
    it('will return all published posts', fakeAsync(() => {
      service
        .getPublished()
        .subscribe((response: ScullyPost[]) =>
          expect(response.length).toEqual(2)
        );
    }));
  });

  describe('getByCategories', () => {
    it('will return all posts by categories', fakeAsync(() => {
      service
        .getByCategories(['tips'])
        .subscribe((response: ScullyPost[]) =>
          expect(response.length).toEqual(2)
        );
    }));
  });

  describe('getByTags', () => {
    it('will return all posts by tags', fakeAsync(() => {
      service
        .getByTags(['ruby'])
        .subscribe((response: ScullyPost[]) =>
          expect(response.length).toEqual(1)
        );
    }));
  });

  describe('search', () => {
    it('will return all posts by search string', fakeAsync(() => {
      service
        .search('hello')
        .subscribe((response: ScullyPost[]) =>
          expect(response.length).toEqual(3)
        );
    }));
  });

  describe('getCategories', () => {
    it('will return all posts categories', fakeAsync(() => {
      service.getCategories().subscribe((response: string[]) => {
        expect(response).toEqual(['tips', 'hello', 'patterns', 'tips']);
      });
    }));
  });

  describe('getTags', () => {
    it('will return all posts tags', fakeAsync(() => {
      service.getTags().subscribe((response: string[]) => {
        expect(response).toEqual(['javascript', 'ruby', 'hello', 'angular']);
      });
    }));
  });
});
