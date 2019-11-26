import {Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import {Events} from './events';
// import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators'
import { registerLocaleData } from '@angular/common';

@Injectable()
export class EventService {
  constructor(private http: Http) { }


  //getEvents

  getEvents(){
    return this.http.get('http://localhost:3000/api/events')
    .pipe(map(res => res.json()));
  }

  addEvents(addEvent){
    var headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this.http.post('http://localhost:3000/api/event/', addEvent,{headers:headers})
    .pipe(map(res => res.json()));
  }

  deleteEvent(id){
    return this.http.delete("http://localhost:3000/api/event/" + id)
    .pipe(map(res => res.json()));
  }
}
