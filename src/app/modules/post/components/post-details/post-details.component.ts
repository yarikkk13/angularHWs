import {Component, OnInit} from '@angular/core';
import {IComment} from "../../../../models/comment";
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../../../comment/services/comment.service";
import {PostService} from "../../services/post.service";
import {IPost} from "../../../../models/post";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: IPost;

  constructor(private activatedRoute: ActivatedRoute,
              private postService: PostService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(params => {
        this.postService.getPost(params.id)
          .subscribe(value => this.post = value)
      })
  }

}
