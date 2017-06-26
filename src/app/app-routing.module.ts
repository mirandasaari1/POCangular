import { NgModule }      from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {EcigComponent} from './eCIG.component';
import {WebserviceComponent} from './webservice.component';


//paths for each URL
const routes: Routes = [
  //routes URL to /eCIG
  {
    path: 'eCIG',
    component: EcigComponent
  },
  //routes URL to /webservice
  {
    path: 'webservice',
    component: WebserviceComponent
  },
  //routes URL to /dashboard
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  //redirects the original path of / to /dashboard
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ] ,
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
