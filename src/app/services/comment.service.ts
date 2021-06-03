import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../models/Comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  url = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private httpClient: HttpClient) {
  };

  getComments(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(this.url)
  };

  getComment(id: string): Observable<IComment> {
    return this.httpClient.get<IComment>(this.url + '/' + id)
  }
}
