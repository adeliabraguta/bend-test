import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IArea } from '../../../models/area.model';
import { IThing } from '../../../models/thing.model';
import { Card } from '../../../components/card/card';

@Component({
  selector: 'app-area',
  imports: [Card],
  templateUrl: './area.html',
  styleUrl: './area.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Area {
  @Input() area: IArea | null = null;
  @Input() things: IThing[] | null = null;

  sortThings() {
    const groups: IThing[][] = [];

    this.things?.forEach((thing) => {
      if (thing.joinedWith === null) {
        groups.push([thing]);
      }
    });

    this.things?.forEach((thing) => {
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
