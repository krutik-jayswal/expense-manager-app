import { Injectable } from '@angular/core';
import { GoogleApiService } from '../../../node_modules/ng-gapi/lib/GoogleApiService';
import { GoogleAuthService } from '../../../node_modules/ng-gapi/lib/GoogleAuthService';

import {Router, Routes} from '@angular/router';
import { NgZone} from "@angular/core";
import * as _ from "lodash";
import GoogleUser = gapi.auth2.GoogleUser;
import GoogleAuth = gapi.auth2.GoogleAuth;

@Injectable()
export class UserService {
    public static SESSION_STORAGE_KEY: string = 'accessToken';
    private user: gapi.auth2.GoogleUser;

    constructor(private googleAuth: GoogleAuthService,
        private router:Router){ 
    }

    public getToken(): string {
        let token: string = sessionStorage.getItem(UserService.SESSION_STORAGE_KEY);
        if (!token) {
            throw new Error("no token set , authentication required");
        }
        return sessionStorage.getItem(UserService.SESSION_STORAGE_KEY);
    }
    
    public signIn(): void {
        this.googleAuth.getAuth()
            .subscribe((auth) => {
                auth.signIn().then(res => this.signInSuccessHandler(res));
            });
    }

    public isLoggedIn(): boolean {
        if(sessionStorage.getItem("accessToken") != "null" && sessionStorage.getItem("accessToken") != null){
            console.log("is logged in true :"+sessionStorage.getItem("accessToken"));
            return true;
        }else{
            console.log("is logged in false :"+sessionStorage.getItem("accessToken"));
            return false;
        }
    }
    public getCurrentUser(): void {
        console.log(sessionStorage.getItem(UserService.SESSION_STORAGE_KEY));
    }

    public logout() {
        sessionStorage.setItem(UserService.SESSION_STORAGE_KEY, null);
    }
    
    private signInSuccessHandler(res: gapi.auth2.GoogleUser) {
            this.user = res;
            sessionStorage.setItem(
                UserService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token
            );
            this.router.navigateByUrl("/expense");
            window.location.reload();
    }
}

