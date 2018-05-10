import {LoginService} from '../login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private service:LoginService) { }

  ngOnInit() {
  	this.user=this.service.getData();
  	 console.log(this.user);
  }

}
