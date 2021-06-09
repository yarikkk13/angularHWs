import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../../../models/user";
import {IComment} from "../../../models/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(this.url)
  }

  getUser(id: string): Observable<IComment> {
    return this.httpClient.get<IComment>(this.url + '/' + id)
  }
}
