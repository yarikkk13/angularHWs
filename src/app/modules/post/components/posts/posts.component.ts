import {Component, OnInit} from '@angular/core';
import {IComment} from "../../../../models/comment";
import {CommentService} from "../../../comment/services/comment.service";
import {PostService} from "../../services/post.service";
import {IPost} from "../../../../models/post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPost[];

  constructor(private postService: PostService) {
  };

  ngOnInit(): void {
    this.postService.getPosts()
      .subscribe(value => this.posts = value)
  }
}
