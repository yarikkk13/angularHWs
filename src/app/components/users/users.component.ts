import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services/user.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // private httpClient: HttpClient;
  // constructor(httpClient: HttpClient) {
  //   this.httpClient = httpClient;
  // }

  users: User[];

  // constructor(private httpClient: HttpClient) {
  //   this.httpClient = httpClient;
  // }
  //
  // ngOnInit(): void {
  //   this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users')
  //     .subscribe(value => this.users=value)
  // }


  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(value => this.users = value)
  }
}
