import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-contenu',
  templateUrl: './contenu.component.html',
  styleUrls: ['./contenu.component.css']
})
export class ContenuComponent implements OnInit {
  constructor(private _api: ApiService,
    private _auth: AuthService,
    private _router:Router) { }

  ngOnInit() {
    this._auth.isUserLogin();
    }

    



}
