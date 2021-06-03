import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app/app.component';
import {UserComponent} from './components/user/user.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UsersComponent} from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {UserService} from "./services/user.service";
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';
import { CommentComponent } from './components/comment/comment.component';

let routes = [
  {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: UserDetailsComponent},
  {path:'posts', component: PostsComponent},
  {path: 'posts/:id',component: PostDetailsComponent},
  {path: 'comments',component: PostsComponent},
  {path: 'comments/:id',component: PostDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailsComponent,
    UsersComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
    CommentsComponent,
    CommentDetailsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
