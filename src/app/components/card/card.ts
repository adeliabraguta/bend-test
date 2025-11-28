import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IThing } from '../../models/thing.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [NgClass],
  templateUrl: './card.html',
  styleUrl: './card.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  thing = input<IThing | null>(null);
  isFirst = input<boolean>(false);
  status = input<'open' | 'closed' | 'both' | null>(null);

  protected statusClass() {
    switch (this.status()) {
      case 'open':
        return 'status-open';
      case 'closed':
        return 'status-closed';
      case 'both':
        return 'status-both';
      default:
        return '';
    }
  }
}
