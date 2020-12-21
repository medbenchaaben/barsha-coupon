import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { CanlendrierComponent } from './canlendrier/canlendrier.component';
import { ContenuComponent } from './contenu/contenu.component';
import { OffresComponent } from './offres/offres.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'offre', component: OffresComponent},
  {path: '', component: ContenuComponent},
  {path: 'calendrier', component: CanlendrierComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
