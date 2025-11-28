import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Service } from '../../services/service';
import { Area_module2 } from './area_module-2/area_module-2';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-module-2',
  imports: [AsyncPipe, Area_module2],
  templateUrl: './module-2.component.html',
  styleUrl: '../../styles/module.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Module2Component {
  // Module 2: Async pipe approach
  private dataService = inject(Service);

  areas$ = this.dataService.getAreas();
}
