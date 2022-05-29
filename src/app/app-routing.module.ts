import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { 
    path: '', 
    component: PagesComponent,
    children: [
      // { path: 'xxx', cmponent: XXXXComponent },
    ]
  },

  { path: 'dashboard', component: DashboardComponent},

  { path: 'login', component: LoginComponent },
    
  // { path:  '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path:  '**', component: NopagefoundComponent }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
