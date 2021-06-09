import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IUser} from "../../../models/user";
import {UserService} from "./user.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<any> {

  constructor(private userService: UserService) {
  }

  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot,
          routerStateSnapshot: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const userId = activatedRouteSnapshot.params.id;
    return this.userService.getUser(userId)
  }

}
