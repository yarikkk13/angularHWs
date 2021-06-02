import {Component, Input, OnInit} from '@angular/core';
import {IComment} from "../../models/Comment";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment: IComment;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }
  goToDetails():void{
    this.router.navigate([this.comment.id],{relativeTo:this.activatedRoute, state:this.comment})
  }

}
