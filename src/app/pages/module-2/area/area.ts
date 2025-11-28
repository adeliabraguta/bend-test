import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { IArea } from '../../../models/area.model';
import { Card } from '../../../components/card/card';
import { SortService } from '../../../shared/sort.service';
import { Service } from '../../../services/service';
import { map, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ISortedThing } from '../../../models/thing.model';

@Component({
  selector: 'app-area',
  imports: [AsyncPipe, Card],
  templateUrl: './area.html',
  styleUrl: './area.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Area {
  private dataService = inject(Service);
  private sortService = inject(SortService);

  area = input<IArea | null>(null);

  things$ = computed(() => {
    const areaId = this.area()?.areaId;
    if (!areaId) return of([] as ISortedThing[]);
    return this.dataService
      .getThingsByAreaId(areaId)
      .pipe(map((things) => this.sortService.sortThings(things)));
  });
}
