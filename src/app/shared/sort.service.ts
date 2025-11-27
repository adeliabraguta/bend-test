import { Injectable } from '@angular/core';
import { IThing } from '../models/thing.model';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  sortThings(things: IThing[]) {
    const groups: IThing[][] = [];

    things?.forEach((thing) => {
      if (thing.joinedWith === null) {
        groups.push([thing]);
      }
    });

    things?.forEach((thing) => {
      if (thing.joinedWith !== null) {
        const parentGroup = groups.find((group) => group[0].id === thing.joinedWith);
        if (parentGroup) {
          parentGroup.push(thing);
        }
      }
    });
    return groups;
  }
}
