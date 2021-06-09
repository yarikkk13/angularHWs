import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IComment} from "../../../../models/comment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment: IComment;
  @Output()
  commentLift = new EventEmitter<IComment>()

  constructor() {
  }

  ngOnInit(): void {
  }

  chooseComment() {
    this.commentLift.emit(this.comment)

  }
}
