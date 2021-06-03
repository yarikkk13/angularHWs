import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {IUser} from "../../../models/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.url)
  }

  getUser(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(this.url + '/' + id)
  }
}
