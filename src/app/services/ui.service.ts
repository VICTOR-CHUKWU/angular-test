import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddData: boolean = false;
  private subject = new Subject<any>()

  constructor() { }
  toggleAddData(): void {
    this.showAddData = !this.showAddData
    this.subject.next(this.showAddData)
  }

  onToggle(): Observable<any> {
   return this.subject.asObservable()
  }
}
