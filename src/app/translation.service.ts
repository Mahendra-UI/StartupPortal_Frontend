import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor() { }
  private val = new BehaviorSubject<boolean>(false);
   valBoolean = this.val.asObservable();

   changeBoolean(val: any){
    this.val.next(val); 
  }
}
