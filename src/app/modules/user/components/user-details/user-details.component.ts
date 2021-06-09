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

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(data=>this.user=data.user)
  }

  ngOnInit(): void {
  }

}
