import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommentsComponent} from "./components/comments/comments.component";
import {CommmentDetailsComponent} from "./components/commment-details/commment-details.component";
import {CommentService} from "./services/comment.service";

const routes: Routes = [
  {path: '', component: CommentsComponent},
  {path: ':id', component: CommmentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[CommentService]
})
export class CommentRoutingModule {
}
