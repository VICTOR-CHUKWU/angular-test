import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() Text!: string;
  @Output() btnClick = new EventEmitter<string>();
  constructor() { }

  

  onClick() {
   this.btnClick.emit();
  // console.log('nn')
  }

}
