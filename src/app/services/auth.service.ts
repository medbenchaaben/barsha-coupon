import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin:boolean=false;
  constructor( private _router:Router) { }
 
    setDataInLocalStorage(variableName, data) {
    localStorage.setItem(variableName, data);
    }
    getUserDetails() {
      return localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null;
      }
    getToken() {
    return localStorage.getItem('token');
    }
    clearStorage() {
    localStorage.clear();
    }

    isUserLogin(){
      console.log(this.getUserDetails());
      console.log("el session:"+localStorage.getItem('userData'));
      if(this.getUserDetails() != null){
      this.isLogin = true;
      }else{
        this.isLogin = false;
        this._router.navigate(['login']);
      }
      }
    }

