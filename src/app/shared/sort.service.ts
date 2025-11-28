import { Injectable } from '@angular/core';
import { ISortedThing, IThing } from '../models/thing.model';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  sortThings(things: IThing[]) {
    const groups: ISortedThing[] = [];

    things?.forEach((thing) => {
      if (thing.joinedWith === null) {
        groups.push({
          status: thing.status,
          list: [thing],
        } as ISortedThing);
      }
    });

    things?.forEach((thing) => {
      if (thing.joinedWith !== null) {
        const parentGroup = groups.find(
          (group: ISortedThing) => group.list[0].id === thing.joinedWith,
        );
        if (parentGroup) {
          if (parentGroup.status !== thing.status) {
            parentGroup.status = 'both';
          }
          parentGroup.list.push(thing);
        }
      }
    });
    return groups.sort((a: ISortedThing, b: ISortedThing) => b.list.length - a.list.length);
  }
}
