import {Component, OnInit} from '@angular/core';
import {IComment} from "../../../../models/comment";
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  comment: IComment;

  constructor(private activatedRoute: ActivatedRoute,
              private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(params => {
        this.commentService.getComment(params.id)
          .subscribe(value => this.comment = value)
      })
  }

}
