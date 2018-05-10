import { Component, OnInit } from '@angular/core';
 import { Router } from '@angular/router';
 import {LoginService} from '../login.service';
 import { User } from '../user';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	// loginInfo:any;
	user:User;

	constructor(private router: Router,private LoginService:LoginService) {
		// this.goHome(1); 
	}
	ngOnInit() {
		 // this.LoginService.getUser(id).subscribe((user) =>{
	  //   	this.user = user;
	  //   	console.log(user);
	  //   	 this.LoginService.setData(user);
	  //   	 this.router.navigate(['home']);
	  //   });

	}
	goHome(id,event) {
  		event.preventDefault();
		 console.log(id);
	    this.LoginService.getUser(id).subscribe((user) =>{
	    	this.user = user;
	    	// console.log(user);
	    	this.LoginService.setData(this.user);
	    	this.router.navigate(['home']);
	    	 
	    });

	    

	    
	    

		
	    
	}

}
