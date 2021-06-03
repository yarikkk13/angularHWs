import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IPost} from "../models/Post";

@Injectable({
  providedIn: 'root'
})
export class ResolvePostService implements Resolve<Observable<IPost[]>> {

  constructor(private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.httpClient.get<IPost []>('https://jsonplaceholder.typicode.com/posts')
  }
}
