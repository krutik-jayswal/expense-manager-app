import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { NG_GAPI_CONFIG } from '../../node_modules/ng-gapi/lib/GoogleApiService';
//import { NG_GAPI_CONFIG } from'./google/GoogleApiService';

import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { ReportComponent } from './report/report.component';
import { SummaryComponent } from './summary/summary.component';
import { UserComponent } from './user/user.component';

import { GoogleApiModule } from '../../node_modules/ng-gapi/lib/GoogleApiModule';
//import { NgGapiClientConfig } from '../../node_modules/ng-gapi//GoogleApiConfig;

import { IncomeService } from './income/income.service';
import { UserService } from './user/user.service';
import { ExpenseService } from './expense/expense.service';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatProgressSpinnerModule,
		MatTableModule, MatExpansionModule, MatSelectModule, MatSnackBarModule, MatTooltipModule, MatChipsModule, MatListModule, MatSidenavModule, MatTabsModule,
		 MatProgressBarModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule

} from '@angular/material';;
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  imports: [
    BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		MatMenuModule,
		MatIconModule,
		MatButtonModule,
		MatTooltipModule,
		MatToolbarModule,
		MatTabsModule,
		FormsModule,
		MatSelectModule,
		MatDatepickerModule,
		MatInputModule,
		MatNativeDateModule,
		MatButtonModule,
		MatDialogModule,
		HttpClientModule,
		GoogleApiModule.forRoot({
			provide: NG_GAPI_CONFIG,
			useValue: {
				client_id: "323522708386-m3juuqim2vbpuug0gmmk172n5fv4seod.apps.googleusercontent.com",
				discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
				scope: [
						"https://www.googleapis.com/auth/analytics.readonly",
						"https://www.googleapis.com/auth/analytics"
				].join(" "),
				redirect_uri:"http://localhost:4200",
				client_secret:"Ro-w0Zkv6gPiGt0qJAlil4_i"
		}
		}),
  ],
  declarations: [
    AppComponent,
		IncomeComponent,
		ReportComponent,
		ExpenseComponent,
		SummaryComponent,
		UserComponent,
		AccountComponent
  ],
  providers: [ExpenseService,IncomeService,UserService],
	bootstrap: [AppComponent],
	entryComponents: [
    AccountComponent
  ],
})
export class AppModule { }