import {Component, OnInit} from '@angular/core';
import {IComment} from "../../models/Comment";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  comment: IComment;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.comment = this.router.getCurrentNavigation()?.extras.state as IComment
    })

  }

  ngOnInit(): void {
  }

}
