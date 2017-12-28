import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


   constructor(private router: Router) { }

   routeToIncome(){
       this.router.navigateByUrl('/income');
   }
   
   routeToExpense(){
       this.router.navigateByUrl('/expense');
   }
   viewReport(){
       this.router.navigateByUrl('/report');
   }
}
