import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent {
  @Input() title = '';
  @Output() liked = new EventEmitter();
}
