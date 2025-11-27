import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { IArea } from '../../models/area.model';
import { Service } from '../../services/service';
import { Area } from './area/area';
import { IThing } from '../../models/thing.model';

@Component({
  selector: 'app-module-1',
  imports: [Area],
  templateUrl: './module-1.component.html',
  styleUrl: './module-1.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Module1Component implements OnInit {
  areas: IArea[] = [];
  things: IThing[] = [];
  private dataService = inject(Service);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    this.dataService.getAreas().subscribe((data: IArea[]) => {
      this.areas = data;
      this.cdr.markForCheck();
    });
    this.dataService.getThings().subscribe((data: IThing[]) => {
      this.things = data;
      this.cdr.markForCheck();
    });
  }

  getThingsByZone(area: number) {
    return this.things.filter((thing) => thing.areaId === area);
  }
}
