import {Component, Input, OnInit} from '@angular/core';
import {IComment} from "../../../../models/comment";
import {IUser} from "../../../../models/user";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {IPost} from "../../../../models/post";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser;


  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  goToDetails(): void {
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute, state: this.user})
  }

}
