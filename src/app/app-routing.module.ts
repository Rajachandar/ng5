import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AboutComponent } from './about/about.component';
import {ServicesComponent } from './services/services.component';
import {CareersComponent } from './careers/careers.component';
import {ContactComponent } from './contact/contact.component';


const routes: Routes = [
 {
  path:'',
  component: HomeComponent
 },
 {
  path:'about',
  component: AboutComponent
 },
 {
  path:'services',
  component: ServicesComponent
 },
 {
  path:'careers',
  component: CareersComponent
 },
 {
  path:'contact',
  component: ContactComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
