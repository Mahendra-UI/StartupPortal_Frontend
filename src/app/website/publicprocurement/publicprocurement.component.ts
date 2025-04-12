import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/translation.service';

@Component({
  selector: 'app-publicprocurement',
  templateUrl: './publicprocurement.component.html',
  styleUrls: ['./publicprocurement.component.css']
})
export class PublicprocurementComponent implements OnInit {

  isTranslationTelugu: boolean = false;
  constructor(private translationSer: TranslationService) { }
  ngOnInit(): void {
    this.translationSer.valBoolean.subscribe((key: boolean) => {
      this.isTranslationTelugu = key
    });
  }

}
