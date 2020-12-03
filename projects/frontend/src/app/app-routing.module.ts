import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddrequestComponent } from './addrequest/addrequest.component';
import { HomeComponent } from './components/home/home.component';
import { ListrequestComponent } from './listrequest/listrequest.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'register' , component:RegisterComponent},
  {path:'login' , component:LoginComponent},
  {path:'menu', component:MenuComponent},
  {path:'listrequest', component:ListrequestComponent},
  {path:'addrequest', component:AddrequestComponent},
  {path:'', redirectTo:'home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
