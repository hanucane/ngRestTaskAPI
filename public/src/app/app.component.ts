import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular';
  tasks = {};
  detail = {};
  taskClick:boolean = false;
  getDetail:boolean = false;
  newTask:any;
  editTask:any;
  edit:boolean = false;

  constructor(private _httpService: HttpService){
    this.tasks;
    this.taskClick;
    this.getDetail;
  }
  ngOnInit(){
    this.newTask = { title: "", description: "" }
    this.editTask = { title: "", description: "" }
  }
  ClickAllTask(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("All tasks success", data);
      this.tasks = data;
      this.taskClick = true;
      this.getDetail = false;
    })
  }
  ClickDetail(id){
    let observable = this._httpService.getTaskInfo(id);
    observable.subscribe(data => {
      console.log("Task detail success", data);
      this.detail = data;
      this.getDetail = true;
    })
  }
  CreateTask(){
    let observable = this._httpService.createTask(this.newTask);
    observable.subscribe(data => console.log("data created",data));
    this.newTask = { title: "", description: "" };
    this.ClickAllTask();
  }
  UpdateTask(id){
    let observable = this._httpService.editTask(id,this.editTask);
    observable.subscribe(data => console.log("data updated",data));
    this.editTask = { title: "", description: ""} 
    this.taskClick = false;
    this.getDetail = false;
    this.edit = false;
  }
  EditTask(id){
    this.edit =! this.edit;
    let observable = this._httpService.getTaskInfo(id);
    observable.subscribe(data => {
      console.log("Edit Task",data)
      this.editTask = {title : data[0].title, description : data[0].description};
    });
  }
  RemoveTask(id){
    let observable = this._httpService.removeTask(id);
    observable.subscribe(data => console.log("data deleted",data));
    this.taskClick = false;
    this.getDetail = false;
    this.edit = false;
  }
}
