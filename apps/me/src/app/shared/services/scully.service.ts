import { Injectable } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ScullyRoute } from '../models/scully-route.interface';

@Injectable({
  providedIn: 'root',
})
export class ScullyService {
  constructor(private scully: ScullyRoutesService) {}

  public getAll(): Observable<ScullyRoute[]> {
    return this.scully.available$.pipe(
      map((links) => links.filter((link) => link?.title?.length))
    );
  }
}
