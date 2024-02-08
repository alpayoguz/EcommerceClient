import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes  = [
  { path: 'login', loadComponent: () => import('./admin-login/admin-login.component').then(x => x.AdminLoginComponent) },
  { path: 'register', loadComponent: () => import('./admin-register/admin-register.component').then(x => x.AdminRegisterComponent) },
  { path: '', redirectTo:'login', pathMatch: 'full' }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class AdminRoutingModule { }
