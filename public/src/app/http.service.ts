import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getTasks();
  }

  getTasks(){
    // let tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/tasks')
  }
  getOneTask(){
    let oneTask = this._http.get("/5b9c1a3c0e6e0e52a8bf71a7");
    oneTask.subscribe(data => console.log("Got one task",data))
  }
  getTasksFromService(){
    return this._http.get('/tasks')
  }
}
