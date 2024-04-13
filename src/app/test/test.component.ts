import { Component, inject } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  template: `
<h1 class="text-3xl font-bold underline mb-3">
    Hello, {{ title }}
</h1>
<p>{{ data }}</p>
  `,
  styles: ``
})
export class TestComponent {
  data = inject(DataService).value;
  title = 'angular-test';
}
