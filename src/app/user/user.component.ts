import { Component, OnInit} from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './user.component.html',
  styleUrls:['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private userService:UserService,
              private router: Router) { }
 
   ngOnInit(): void {
     
   } 
   login(){
      this.userService.signIn();
   }  
}