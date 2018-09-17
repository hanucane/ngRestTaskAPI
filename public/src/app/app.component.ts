import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  tasks = {};
  detail = {};
  unclick:boolean = false;
  getDetail:boolean = false;

  constructor(private _httpService: HttpService){
    this.tasks;
    this.unclick;
    this.getDetail;
  }

  GetAllTasks(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got all Data",data);
      this.tasks = data;
      console.log(this.tasks);
      this.unclick =! this.unclick;
      this.getDetail = false;
    });
  }
  ClickInfo(id){
    let observable = this._httpService.getInfo(id);
    this.getDetail = true;
    observable.subscribe(data => {console.log("Get one data",data); 
      this.detail = data;
      console.log(this.detail);
      }
    )}
}
