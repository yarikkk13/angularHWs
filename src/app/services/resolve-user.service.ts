import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IUser} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class ResolveUserService implements Resolve<Observable<IUser[]>> {

  constructor(private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.httpClient.get<IUser []>('https://jsonplaceholder.typicode.com/users')
  }
}
