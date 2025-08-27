import { afterEveryRender, afterNextRender, Component, ElementRef, inject, input, signal, viewChild} from '@angular/core';
import { ChildComponent } from '../child-component/child-component';

@Component({
  selector: 'app-parent-component',
  imports: [ChildComponent],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.scss'
})
export class ParentComponent {
  readonly inputText = viewChild<ElementRef<HTMLInputElement>>('myInput');
  readonly elementREf = inject(ElementRef);
  constructor() {
      afterEveryRender(() => {
          console.log('inner text', this.inputText()?.nativeElement.value);
          console.log('Element by ID', this.elementREf.nativeElement.querySelector('#myInput'));
      });
  }
  passedValue = 0;
  isValueChanged(value: number) {
    console.log('Value changed in child component:', value);
  }
}
