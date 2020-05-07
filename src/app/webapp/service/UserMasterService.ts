import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserMaster } from '../orm/UserMaster';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserMasterService {

    private baseUrl = "http://localhost:8080";

    constructor(private httpClient: HttpClient) { }

    // AUTHENTICATING USER

    authenticate(userMaster: UserMaster) {
        return this.httpClient.post<any>(`${this.baseUrl}/authenticate`, userMaster).pipe(map(
            userData => {
                sessionStorage.setItem('username', userMaster.username);
                alert('rtgdf');
                sessionStorage.setItem('token', `Bearer ${userData.token}`);
                return userData;
            }
        )
        );
    }

    get(userMaster:UserMaster){
        return this.httpClient.get<UserMaster>(`${this.baseUrl}/authenticate/login/get/UserMaster/${userMaster.username}`);
    }

    save(userMaster: UserMaster) {
        return this.httpClient.post(`${this.baseUrl}/save/UserMaster`, userMaster, { responseType: 'text' });
    }

    isUserLoggedIn() {
        let username = sessionStorage.getItem('username');
        return !(username === null)
    }

    logOut() {
        sessionStorage.removeItem('username');
    }
}