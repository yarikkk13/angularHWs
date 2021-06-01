import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app/app.component';
import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {PostComponent} from './components/post/post.component';
import {PostsComponent} from './components/posts/posts.component';
import {HomeComponent} from './components/home/home.component';
import {UserService} from "./services/user.service";
import {PostService} from "./services/post.service";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {UserDetailsComponent} from './components/user-details/user-details.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

let routes : Routes = [
  {
    path: 'users', component: UsersComponent,
    children: [
      {path: ':id', component: UserDetailsComponent}
    ]
  },
  {path: 'home', component: HomeComponent},
  {path:'posts', component:PostsComponent},
  {path:'posts/:id', component:PostDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    PostComponent,
    PostsComponent,
    HomeComponent,
    UserDetailsComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
