import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../model/user";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClint: HttpClient) { }

  getUsers():Observable<User[]>{
    return this.httpClint.get<User[]>(this.url)
  }
  getUser(id: number):Observable<User>{
    return this.httpClint.get<User>(this.url + '/' + id)
  }
}
