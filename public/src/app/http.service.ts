import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
  }

  getTasks(){
    return this._http.get("/tasks");
  }
  getTaskInfo(id){
    return this._http.get("/"+id);
  }
  createTask(newTask){
    return this._http.post("new",newTask);
  }
  editTask(id,update){
    return this._http.put("/update/" + id,update);
  }
  removeTask(id){
    return this._http.delete("/remove/" + id);
  }
}
