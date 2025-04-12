import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { TranslationService } from 'src/app/translation.service';


@Component({
  selector: 'app-reasons',
  templateUrl: './reasons.component.html',
  styleUrls: ['./reasons.component.css']
})
export class ReasonsComponent implements OnInit {


  isTranslationTelugu: boolean = false;
  constructor(private translationSer: TranslationService) { }
  ngOnInit(): void {
    this.translationSer.valBoolean.subscribe((key: boolean) => {
      this.isTranslationTelugu = key
    });
    AOS.init();

  }

}
