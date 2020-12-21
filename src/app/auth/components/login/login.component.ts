import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from './../../../services/api.service'
import { AuthService } from './../../../services/auth.service'
import { Router } from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
    errorMessage
    constructor(
        private _api: ApiService,
        private _auth: AuthService,
        private _router: Router
    ) { }
    ngOnInit() {

    }
    onSubmit(form: NgForm) {
        this._api.postTypeRequest('user/login', form.value).subscribe((res: any) => {
            if (res.status) {
                this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
                this._auth.setDataInLocalStorage('token', res.token);
               this._auth.isLogin = true;
                this._router.navigate(['']);
                
            } else {
                this._auth.isLogin = false;
                alert("login ou password est erroné\nVérifiez-vous!");
            }
        }, err => {
            this.errorMessage = err['error'].message;
        });
    }
    
    logout() {
        this._auth.clearStorage()
        this._router.navigate(['login']);
    }
}