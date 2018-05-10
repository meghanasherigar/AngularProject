import {Injectable} from '@angular/core';
// import {Http, Response, Headers } from '@angular/http';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators'
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/find';
import { User } from './user';


@Injectable()
export class LoginService{
	constructor(private http:HttpClient){}
	dataValue:any;
	userValue:any;
	// private url = "http://jsonplaceholder.typicode.com/users";
	private url = "http://localhost:4200/assets/data.json";
	getUsers():Observable<User[]>{
		// return this.http.get(this.url).do(data=>{
		// 	// console.log(data);
		// });

		 return this.http.get<User[]>(this.url);
	}
	// getUser(id:number):Observable<any>{
		
	// 	return this.getUsers()
	// 	.map((users:User[])=>{
	// 		users.find(user=>user.id==id)

	// 	});
	// }

	getUser(id: number): Observable<User> {
        return this.getUsers()
            .map((users: User[]) => users.find(p =>
            		p.id == id
             ));
    }
	setData(data){

		this.dataValue=data;
   	}
	getData(){
    	return this.dataValue;

	}
	setUserData(data){

		this.userValue=data;
   	}
	getUserData(){
    	return this.userValue;

	}

}
