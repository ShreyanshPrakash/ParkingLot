import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilitieService {

  popupState$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  getPopupState(): Observable<boolean>{
    return this.popupState$.asObservable();
  }

  setPopupState( state ): void{
    this.popupState$.next( state );
  }

}
