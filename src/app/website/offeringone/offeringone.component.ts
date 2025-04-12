import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/translation.service';

@Component({
  selector: 'app-offeringone',
  templateUrl: './offeringone.component.html',
  styleUrls: ['./offeringone.component.css']
})
export class OfferingoneComponent implements OnInit {

  isTranslationTelugu: boolean = false;
  constructor(private translationSer: TranslationService) { }
  ngOnInit(): void {
    this.translationSer.valBoolean.subscribe((key: boolean) => {
      this.isTranslationTelugu = key
    });
  }
  

}
