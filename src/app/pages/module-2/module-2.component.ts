import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Service } from '../../services/service';
import { Area } from './area/area';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-module-2',
  imports: [AsyncPipe, Area],
  templateUrl: './module-2.component.html',
  styleUrl: './module-2.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Module2Component {
  private dataService = inject(Service);

  areas$ = this.dataService.getAreas();
}
