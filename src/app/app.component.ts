import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'barsha';
  isLogin:boolean=this._auth.isLogin;
  constructor(
    private _api: ApiService,
    public _auth: AuthService,
    private _router:Router
    ) { }
    ngOnInit() {
      //this._auth.isUserLogin();
      
      }
  
  
  deconnexion(){
    this._auth.clearStorage()
this._router.navigate(['login']);

  }
}
