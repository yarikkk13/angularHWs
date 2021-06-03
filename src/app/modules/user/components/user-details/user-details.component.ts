import {Component, OnInit} from '@angular/core';
import {IUser} from "../../../../models/user";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: IUser;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
    this.activatedRoute.params
      .subscribe(params => {
        this.userService.getUser(params.id)
          .subscribe(value => this.user = value)
      })
  }

  ngOnInit(): void {
  }

}
