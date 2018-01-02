import { Component, ViewChild, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {


   constructor(private router: Router,
               private route:ActivatedRoute,
               private userService:UserService
            ) { 

    }
    ngOnInit(): void {
        if(!this.isLoggedIn() && !window.location.href.endsWith("user")){
            this.router.navigateByUrl('/user');
        }
    }
   routeToIncome(){
       this.router.navigateByUrl('/income');
   }
   
   routeToExpense(){
       this.router.navigateByUrl('/expense');
   }
   viewReport(){
       this.router.navigateByUrl('/report');
   }
   viewSummary(){
    this.router.navigateByUrl('/summary');
   }
   isLoggedIn(){
     return this.userService.isLoggedIn();
   }
   logout(){
       this.userService.logout();
       this.router.navigateByUrl("/user");
   }
   
}
