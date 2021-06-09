import {Component, OnInit} from '@angular/core';
import {IComment} from "../../../../models/comment";
import {CommentService} from "../../services/comment.service";


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComment[]

  chosenComment: IComment;

  constructor(
    //private dataTransfer: DataTransferService,
    private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.commentService.getComments()
      .subscribe(value => this.comments = value)
  }

  xxx(z: IComment) {
    this.chosenComment = z
  }

}
