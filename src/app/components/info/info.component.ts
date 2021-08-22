import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service'
import {Data} from '../../Data'
import { discardPeriodicTasks } from '@angular/core/testing';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  datas: Data[] = [];

  constructor(
    private dataService:DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) =>{
      this.datas = data
    })
  }

  removeSingleData(data:Data) {
    this.dataService.deleteData(data)
    .subscribe(() =>{
      this.datas = this.datas.filter(d => {
      return  d.id !== data.id
      })
    })
  }

  reminderToggle(data:Data) {
    data.reminder = !data.reminder;
    this.dataService.updateData(data).subscribe()
  }

  dataAdd(data: Data) {
    console.log(data)
    this.dataService.addData(data).subscribe((newdata) =>{
      return this.datas.push(newdata)
    })
  }

  
}
