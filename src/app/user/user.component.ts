import { Component, OnInit} from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './user.component.html',
  styleUrls:['./user.component.css']
})
export class UserComponent implements OnInit {
  public userName:string=null;
  constructor(private userService:UserService,
              private router: Router) { }
 
   ngOnInit(): void {
     this.userName=this.userService.getCurrentUser();
   } 
   login(){
      this.userService.signIn();
   }  
   isLoggedIn(): boolean{
     return this.userService.isLoggedIn();
   }
   
}