import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./services/user.service";
import {ResolveUserService} from "./services/resolve-user.service";


@NgModule({
  declarations: [
    UserDetailsComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    ResolveUserService
  ]
})
export class UserModule {
}
