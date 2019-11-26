import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],


})
export class AppComponent {


  eventCreate = false;
  eventShow = false;
  title = 'Upcoming events';
  createtitle = 'Create your events';

  openCreate() {
    this.eventCreate = true;
  }

  openShow(){
    this.eventShow = true;
  }
}


