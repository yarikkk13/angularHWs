import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommentRoutingModule} from './comment-routing.module';
import {CommentDetailsComponent} from './components/comment-details/comment-details.component';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentComponent} from './components/comment/comment.component';
import {HttpClientModule} from "@angular/common/http";
import {CommentService} from "./services/comment.service";


@NgModule({
  declarations: [
    CommentDetailsComponent,
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommentService
  ]
})
export class CommentModule {
}
