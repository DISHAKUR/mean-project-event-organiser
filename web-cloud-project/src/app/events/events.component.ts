import { Component , Input} from '@angular/core';
import {EventService} from '../events.service';
import {Events} from '../events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  providers :[EventService]
})
export class EventsComponent {

  constructor(private eventService:EventService){}
  @Input() eventCreate: boolean;
  @Input() eventShow: boolean;
newEvent = 'Create your Event';
eventName = '';
events: Events[];
name: string;
date: Date;
location: string;
openDialog:boolean;
deleteevent = false;
delete_itemid :string;
editopendialog =  false;

//get events on ngoninit

ngOnInit(){


  this.eventService.getEvents()
  .subscribe(events =>
    this.events = events);
}
onSaveEvent(){

  this.newEvent = this.eventName + ' ' + 'event sucessfully created';
  // alert('event created')
}
addEvent(){
  const newEvent = {
    name: this.name,
    date: this.date,
    location:this.location
  }
  this.eventService.addEvents(newEvent).subscribe(
    ev => {
    if(ev.msg){
        alert(ev.msg);
        this.name =  '';
        this.location =  '';
        this.date = null;
      } else {
        this.events.push(ev);
        this.eventService.getEvents().subscribe(events => this.events = events);
      }

    });


}

deleteEvent(val:any)
{
  if(val){
    var events = this.events;
    this.eventService.deleteEvent(this.delete_itemid)
    .subscribe(data =>{
      if(data.n == 1){
        for(var i =0; i < events.length ; i++){
          if(events[i]._id == this.delete_itemid){
            events.splice(i,1);
            this.openDialog =  false;
          }
        }
      }
    });
  }

}

editDialog(x){
  console.log(x)
  if(x){
    this.editopendialog = true;
    this.name =  x.name;
    this.location =  x.location;
    this.date =  x.date;
  }
}

openModal(x){
  this.delete_itemid = x;

  if(x){
    this.openDialog = true;
  }
}

closeEdit(val){
  if(val){
    this.editopendialog = false;
    this.name =  '';
    this.location =  '';
    this.date = null;

  }
}

}

