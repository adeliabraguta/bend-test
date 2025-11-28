import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { IArea } from '../../../models/area.model';
import { ISortedThing, IThing } from '../../../models/thing.model';
import { Card } from '../../../components/card/card';
import { SortService } from '../../../shared/sort.service';

@Component({
  selector: 'app-area_module-1',
  imports: [Card],
  templateUrl: './area_module-1.html',
  styleUrl: '../../../styles/area.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Area_module1 implements OnChanges {
  // Module 1: classic @Input() and ngOnChanges approach
  @Input() area: IArea | null = null;
  @Input() things: IThing[] = [];
  sortedThings: ISortedThing[] = [];
  private sortService = inject(SortService);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['things']) {
      this.sortedThings = this.sortService.sortThings(this.things);
    }
  }
}
