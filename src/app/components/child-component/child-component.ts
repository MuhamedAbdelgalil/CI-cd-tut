import { Component, model } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.scss'
})
export class ChildComponent {

  value = model.required<number>();

  updateVaue() {
    this.value.update( prev => prev + 1);
  }
}
