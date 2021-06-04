import {Component, OnInit} from '@angular/core';
import {IComment} from "../../../../models/comment";
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-commment-details',
  templateUrl: './commment-details.component.html',
  styleUrls: ['./commment-details.component.css']
})
export class CommmentDetailsComponent implements OnInit {
  comment: IComment;

  constructor(private activatedRoute: ActivatedRoute,
              private commentService: CommentService) {
    this.activatedRoute.params
      .subscribe(params => {
        this.commentService.getComment(params.id)
          .subscribe(value => this.comment = value)
      })
  }

  ngOnInit(): void {
  }
}
