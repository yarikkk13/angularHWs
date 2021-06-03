import {Injectable} from '@angular/core';
import {IUser} from "../models/User";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.url)
  }

  getUser(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(this.url + '/' + id)
  }
}
