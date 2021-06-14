import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[]
  select = new FormControl()
  user: User
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => {this.users=value})
  }
  myForm = new FormGroup({
    select: this.select
  })
  show(){
    console.log(this.myForm);
    this.userService.getUser(this.select.value).subscribe(value => {this.user = value})
    console.log(this.user);
  }
}
