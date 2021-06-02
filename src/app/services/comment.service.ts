import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IComment} from "../models/Comment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url = 'https://jsonplaceholder.typicode.com/comments'

  constructor(private httpClient: HttpClient) {
  }

  getComments(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(this.url)
  }
}
