import {Injectable} from '@angular/core';
import {IPost} from "../models/Post";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.url)
  }

  getPost(id: string): Observable<IPost> {
    return this.httpClient.get<IPost>(this.url + '/' + id)
  }
}
