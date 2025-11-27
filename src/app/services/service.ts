import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IThing } from '../models/thing.model';
import { IArea } from '../models/area.model';

@Injectable({
  providedIn: 'root',
})
export class Service {
  protected http = inject(HttpClient);
  getThings(): Observable<IThing[]> {
    return this.http.get<IThing[]>('/assets/data/things.json');
  }

  getAreas(): Observable<IArea[]> {
    return this.http.get<IArea[]>('/assets/data/areas.json');
  }
}
