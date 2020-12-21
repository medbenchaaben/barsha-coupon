import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { OffresComponent } from './offres/offres.component';
import { AuthModule } from './auth/auth/auth.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContenuComponent } from './contenu/contenu.component';
import { AgendaService, DayService, MonthService, ScheduleModule, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';
import { CanlendrierComponent } from './canlendrier/canlendrier.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    OffresComponent,
    ContenuComponent,
    CanlendrierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AuthModule,
    FormsModule,
    HttpClientModule,
    ScheduleModule
    ],
  providers: [AgendaService, DayService, WeekService, WorkWeekService, MonthService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
