import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { ReportComponent } from './report/report.component';
import { SummaryComponent } from './summary/summary.component';

import { IncomeService } from './income/income.service';
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
		HttpClientModule
  ],
  declarations: [
    AppComponent,
		IncomeComponent,
		ReportComponent,
		ExpenseComponent,
		SummaryComponent,
		AccountComponent
  ],
  providers: [ExpenseService,IncomeService],
	bootstrap: [AppComponent],
	entryComponents: [
    AccountComponent
  ],
})
export class AppModule { }