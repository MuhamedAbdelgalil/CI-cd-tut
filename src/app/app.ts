import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './components/parent-component/parent-component';

@Component({
  selector: 'app-root',
  imports: [ParentComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('play-angular-20');
}
