import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent }  from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//
import {DashboardComponent} from './dashboard.component';
import {EcigComponent} from './eCIG.component';
import {WebserviceComponent} from './webservice.component';
import {AppRoutingModule} from './app-routing.module';
// import {HeaderComponent} from "./header.component";
// import {NavigationComponent} from "./shared/navigation/navigation.component";
// import {BodyComponent} from "./shared/body/body.component";
// import {MainComponent} from "./shared/index.component";



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
  imports:      [ BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ AppComponent,
    // MainComponent,
      DashboardComponent,
      EcigComponent,
      WebserviceComponent,
    //   HeaderComponent,
    // // NavigationComponent,
    // BodyComponent
  ],
  bootstrap:    [ AppComponent ],
  exports: [RouterModule]

})


export class AppModule { }

