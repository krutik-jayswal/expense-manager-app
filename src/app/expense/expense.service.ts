import { Injectable } from '@angular/core';
import { Expense } from './expense';
import { GoogleApiService } from '../../../node_modules/ng-gapi/lib/GoogleApiService';
import { GoogleAuthService } from '../../../node_modules/ng-gapi/lib/GoogleAuthService';
@Injectable()
export class ExpenseService {
    public static SESSION_STORAGE_KEY: string = 'accessToken';
    private user: gapi.auth2.GoogleUser;

    constructor(private googleAuth: GoogleAuthService){ 
    }

    saveExpense(e:Expense){
        console.log(e);
    }

    public getToken(): string {
        let token: string = sessionStorage.getItem(ExpenseService.SESSION_STORAGE_KEY);
        if (!token) {
            throw new Error("no token set , authentication required");
        }
        return sessionStorage.getItem(ExpenseService.SESSION_STORAGE_KEY);
    }
    
    public signIn(): void {
        this.googleAuth.getAuth()
            .subscribe((auth) => {
                auth.signIn().then(res => this.signInSuccessHandler(res));
            });
    }
    
    private signInSuccessHandler(res: gapi.auth2.GoogleUser) {
            this.user = res;
            sessionStorage.setItem(
                ExpenseService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token
            );
        }
}

