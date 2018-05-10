import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  user: User;
  loginUser: User;

  allUser: User[] = [];
  constructor(private service: LoginService, private router: Router) { }

  ngOnInit() {
    this.user = this.service.getData();
    this.service.setUserData(this.user);
    console.log(this.user);
    this.service.getUsers().subscribe(data => {
      this.allUser = data;
    });
  }

  showLoginUserDetails() {
    this.loginUser = this.service.getUserData();
    this.service.setData(this.loginUser);
    this.router.navigate(['user-detail']);
  }

  showUsersDetails(user) {
    this.service.setData(user);
    this.router.navigate(['user-detail']);
  }

}
