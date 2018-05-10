import {RouterModule,Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';



export const routes:Routes=[
	{path:"",component:LoginComponent},
	{path:'login',component:LoginComponent},
	{path:'home',component:HomeComponent},
	{path:'user-detail',component:UserDetailComponent}

]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);