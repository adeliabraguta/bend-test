import { Component, input } from '@angular/core';
import { IThing } from '../../models/thing.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
  standalone: true,
})
export class Card {
  thing = input<IThing | null>(null);
}
