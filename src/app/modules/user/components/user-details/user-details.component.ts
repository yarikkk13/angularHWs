import {Component, OnInit} from '@angular/core';
import {IComment} from "../../../../models/comment";
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../../../comment/services/comment.service";
import {UserService} from "../../services/user.service";
import {IUser} from "../../../../models/user";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: IUser;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(params => {
        this.userService.getUser(params.id)
          .subscribe(value => this.user = value)
      })
  }

}
