import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IComment} from "../models/Comment";

@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<Observable<any[]>> {

  constructor(private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.httpClient.get<IComment []>('https://jsonplaceholder.typicode.com/comments')
  }
}
