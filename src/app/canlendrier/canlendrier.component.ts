import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';
import { Calendrier } from '../calendrier';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-canlendrier',
  templateUrl: './canlendrier.component.html',
  styleUrls: ['./canlendrier.component.css']
})
export class CanlendrierComponent implements OnInit {
  isLogin:boolean=false;
 
  listCalendrier:Calendrier[]=[];
  public currentDate: Date = new Date();
  public newViewMode: View = 'Month';
  public eventData: EventSettingsModel = {
    dataSource: []
}
   constructor(private _api: ApiService,
    private _auth: AuthService,
    private _router:Router) { }

  ngOnInit(): void {
    console.log("date"+new Date());
    this._auth.isUserLogin();
    this.getCalendrier();
  }
  getCalendrier(){
    this._api.postTypeRequest('user/calendrier',null).subscribe((res: any) => {
        this.listCalendrier=res.data;
        console.log('data'+this.listCalendrier);
        this.eventData={
          dataSource: this.listCalendrier
        }
  });
}


}
