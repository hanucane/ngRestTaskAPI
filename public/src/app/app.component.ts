import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular';
  tasks = {};

  constructor(private _httpService: HttpService){
  }
  ngOnInit(){
    this.getTasksFromService()
  }
  GetAllTasks(){
    return this._httpService.getTasks();
  }
  GetOneTask(){
    return this._httpService.getOneTask();
  }
  getTasksFromService(){
    let observable = this._httpService.getTasksFromService()
    observable.subscribe(data => {
      console.log("Got our data!", data)
      this.tasks = data;
      console.log(this.tasks)
    })
  }
}
