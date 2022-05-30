import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos
import { AuthRoutingModule } from './auth/login/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  { path:  '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path:  '**', component: NopagefoundComponent }
];

@NgModule({
  declarations: [],
  imports: [ 
    RouterModule.forRoot( routes ),
    AuthRoutingModule,
    PagesRoutingModule
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule {}
