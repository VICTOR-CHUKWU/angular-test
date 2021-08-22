import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Data } from 'src/app/Data';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent {
  @Output() addData:EventEmitter<Data> = new EventEmitter;
  head!: string;
  sub!: string;
  reminder:boolean = false;
  showAddData!: boolean;
  subscription!: Subscription;

  constructor(private uiservice : UiService) {
    this.subscription = this.uiservice
    .onToggle()
    .subscribe((value) => (this.showAddData = value))
   }

  
  
  onSubmit() {
    if(!this.head || !this.sub) {
      alert('please fill empty field');
      return;
    };

    const dataInfo = {
      head: this.head,
      sub: this.sub,
      reminder: this.reminder

    };

    this.addData.emit(dataInfo)

    this.head = '',
    this.sub = '',
    this.reminder = false
    
  }

}
