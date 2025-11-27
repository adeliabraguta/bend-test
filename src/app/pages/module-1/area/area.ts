import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { IArea } from '../../../models/area.model';
import { IThing } from '../../../models/thing.model';
import { Card } from '../../../components/card/card';
import { SortService } from '../../../shared/sort.service';

@Component({
  selector: 'app-area',
  imports: [Card],
  templateUrl: './area.html',
  styleUrl: './area.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Area implements OnChanges {
  @Input() area: IArea | null = null;
  @Input() things: IThing[] = [];
  sortedThings: IThing[][] = [];
  private sortService = inject(SortService);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['things']) {
      this.sortedThings = this.sortService.sortThings(this.things);
    }
  }
}
