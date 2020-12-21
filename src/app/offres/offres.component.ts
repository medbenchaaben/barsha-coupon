import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from '../offre';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {
  listOffres:Offre[]=[];
  editForm:boolean;
  showForm:boolean=false;
  searchText:string='';
  resultOffres:Offre[]=[];
  isLogin:boolean=false;
  
  myForme:Offre=
   {  
    "titre": "",
    "prix": 0,
    "date_validite": new Date(),
    "image": ""}
  ;
  constructor(private _api: ApiService,
    private _auth: AuthService,
    private _router:Router) { }

  ngOnInit(): void {
    this._auth.isUserLogin();
    this.getOffres();
  }
  getOffres(){
    this._api.postTypeRequest('user/list',null).subscribe((res: any) => {
        this.listOffres=res.data;
  }
    );
}

}
