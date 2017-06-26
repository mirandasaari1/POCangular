import { Component } from '@angular/core';

@Component({
  selector: 'navigation',
  template: '' +
  '<div class="container-fluid"> ' +
  '<div class="row">'+
 ' <div class="col-md-3 col-xs-2 btn-group-vertical">'+
    //button routes to eCIG
  '<a role="button" routerLink="/eCIG" class="btn btn-default btn-lg btn-block btn btn-outline-primary btn-lg">'+
  'eCIG'+
 ' </a>'+
 ' <br />'+

  // button routes to the webservice page
  '<a routerLink="/webservice" role="button" class="btn btn-default btn-lg btn-block btn btn-outline-primary btn-lg">'+
  'webservice'+
  '</a>'+
  '<br />'+

  '</div> '+
  '</div>'+
  '</div>',  //content rendered for the home page
})

export class NavigationComponent {
}
