import { Injectable } from '@angular/core';
import {Data} from '../Data'
import { Observable,of } from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
 headers: new HttpHeaders({
   "content-type": "application/json"
 })
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:5000/data'

  constructor(private http: HttpClient) { }

  getData(): Observable <Data[]>{
   return this.http.get<Data[]>(this.apiUrl)
  }

  deleteData(data:Data):Observable<Data>{
    const url = `${this.apiUrl}/${data.id}`
    return this.http.delete<Data>(url)
  }

  updateData(data:Data):Observable<Data>{
    const url = `${this.apiUrl}/${data.id}`
    return this.http.put<Data>(url, data, httpOptions)
  }

  addData(data:Data): Observable<Data> {
    return this.http.post<Data>(this.apiUrl, data, httpOptions)
  }
}
