import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl :string="http://localhost:3002/users";
    constructor(private _http:HttpClient) { }

    public getUsers() : Observable<any>{
      return this. _http.get(this.baseUrl);
    }

    public updateUser(id:any,age:any,data:any):Observable<any>{
      return this._http.put(this.baseUrl+'/'+id+'/'+age,data)
    }
    
    public storeUser(formValue:any): Observable<any>{
      return this._http.post(this.baseUrl,formValue);
    }
    
    public findUser(id:any):Observable<any>{
      return this._http.get(this.baseUrl+'/'+id);
    }
    
    public deleteUser(id:any):Observable<any>{
      return this._http.get(this.baseUrl+'/' +id)
    }

  }
