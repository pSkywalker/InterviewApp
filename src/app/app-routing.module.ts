import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventInputComponent } from "./components/event-input/event-input.component";
import { AdminComponent } from "./components/admin/admin.component"
import { AdminLoginComponent } from "./components/admin-login/admin-login.component"


const routes: Routes = [
  { path: '', component: EventInputComponent },
  { path: "admin", component: AdminComponent },
  { path: "adminLogin", component: AdminLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
