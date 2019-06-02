import { Component, OnInit } from '@angular/core';
import { UtilitieService } from 'src/app/services/utility.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  showPopup: Observable<boolean>;
  constructor( private utilityService: UtilitieService ) { }

  ngOnInit() {
    this.showPopup = this.utilityService.getPopupState();
  }

  closePopup(){ 
    this.utilityService.setPopupState( false );
  }

}
