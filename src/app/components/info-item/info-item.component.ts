import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Data } from '../../Data';

@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.css']
})
export class InfoItemComponent {
  @Input()
  data!: Data;

  @Output() DeleteData:EventEmitter<Data> = new EventEmitter;
  @Output() toggleReminder:EventEmitter<Data> = new EventEmitter;

  constructor() { }

  

  deleteData(data:Data){
    this.DeleteData.emit(data)
  }

  onToggle(data:Data){
    this.toggleReminder.emit(data)
  }

}
