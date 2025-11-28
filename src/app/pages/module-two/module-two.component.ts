import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Service } from '../../services/service';
import { Area } from './area/area';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-module-two',
  imports: [AsyncPipe, Area],
  templateUrl: './module-two.component.html',
  styleUrl: '../../styles/module.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModuleTwoComponent {
  // Module 2: Async pipe approach
  private dataService = inject(Service);

  areas$ = this.dataService.getAreas();
}
