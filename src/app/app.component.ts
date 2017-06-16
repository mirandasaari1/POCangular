import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component',
  template:
  //<!-- page header-->
  '<div class="container-fluid">'+
  '<div class="page-header">'+
  '<div class="row">'+
    //<!-- link to home/CIG logo -->
  '<div class="col-md-2 col-xs-1">'+
  '<a routerLink="/dashboard">'+
  '<img src="../assets/img/logo.png" class="img-responsive ">'+
  '</a>'+
  '</div>'+
  //<!-- dropdown menu for more options -->
  '<div class="col-md-3 col-xs-1 col-md-offset-7 col-xs-offset-3 dropdown">'+
  '<a role="button" class="btn btn-secondary btn-lg dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
   ' Login'+
    '</a>'+
   // <!-- options of the dropdown -->
  '<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">'+
  '<a class="dropdown-item" href="#">Customer</a>'+
  '<a class="dropdown-item" href="#">Agent</a>'+
  '</div>'+
  '</div>'+
  '</div>'+
  '</div>'+
  //<!-- navigation options for the page -->
  '<div class="row">'+
  '<div class="col-md-3 col-xs-2 btn-group-vertical">'+
   // <!-- button routes to the eCIG page -->
  '<a role="button" routerLink="/eCIG" class="btn btn-default btn-lg btn-block btn btn-outline-primary btn-lg">'+
  'eCIG'+
  '</a>'+
  '<br />'+
 // <!-- button routes to the webservice page -->
  '<a routerLink="/webservice" role="button" class="btn btn-default btn-lg btn-block btn btn-outline-primary btn-lg">'+
  'webservice'+
  '</a>'+
  '<br />'+
 ' </div>'+


 // <!-- body of the page, content is rendered based on the selected button-->
  '<div class="col-md-9 text-center">'+
   ' <router-outlet></router-outlet>'+
    '</div>'+
    '</div>'+
   ' </div>'
})
export class AppComponent {
  title = 'app';
}
