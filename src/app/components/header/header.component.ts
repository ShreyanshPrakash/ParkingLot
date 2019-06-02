import { Component, OnInit } from '@angular/core';
import { HttpclientService } from 'src/app/services/httpclient.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { HeaderModel } from 'src/app/models/header.model';
import { UtilitieService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerContent: any;

  constructor( private httpService: HttpclientService, private utilityService: UtilitieService ) { }

  ngOnInit() {
    this.httpService.getHeaderContent().subscribe( ( res: HttpResponse<any> ) => {
      this.headerContent = res;
      console.log( res );
    }, ( err: HttpErrorResponse ) => {
      console.dir( err );
    })
  }

  togglePopup(){
    this.utilityService.setPopupState( true );
  }

}
