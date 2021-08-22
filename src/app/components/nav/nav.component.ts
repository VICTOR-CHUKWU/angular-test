import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  showAddData!: boolean;
  subscription!: Subscription;

  constructor(private uiservice:UiService) {
    this.subscription = this.uiservice
    .onToggle()
    .subscribe((value) => (this.showAddData = value))
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  showLogged() {
   this.uiservice.toggleAddData();
    
  }

}
