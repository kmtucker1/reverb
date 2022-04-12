import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EmailValidator } from "@angular/forms";
import { environment } from "src/environments/environment";

@Injectable ({
    providedIn: 'root'
})
export class AuthenticationServide {
    baseUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts";
    signUpEndpoint:string = "signUp";

    public constructor(private http:HttpClient) {
        
    }

    public signup(email:string, password:string) {
        const requestBody = {
            "email": email,
            "password": password,
            "returnSecuretoken": true
        };
        return this.http.post(this.baseUrl + ":" + this.signUpEndpoint + "?" + 
        "key=" + environment.firebase.apiKey, requestBody);
    }
}