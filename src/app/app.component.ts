import { Component } from '@angular/core';
import { ModelViewerComponent } from './model-viewer/model-viewer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ModelViewerComponent],
  template: `
    <main>
      <h1>3D Model Viewer</h1>
      <app-model-viewer></app-model-viewer>
    </main>
  `,
  styles: [`
    main {
      padding: 20px;
      text-align: center;
    }
    h1 {
      color: #333;
      margin-bottom: 20px;
    }
  `]
})
export class AppComponent {
  title = 'angular-3d-viewer';
}