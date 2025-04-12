import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/translation.service';

@Component({
  selector: 'app-startupdefinition',
  templateUrl: './startupdefinition.component.html',
  styleUrls: ['./startupdefinition.component.css']
})
export class StartupdefinitionComponent implements OnInit {
  isTranslationTelugu: boolean = false;
  constructor(private translationSer: TranslationService) { }
  ngOnInit(): void {
    this.translationSer.valBoolean.subscribe((key: boolean) => {
      this.isTranslationTelugu = key
    });
  }
}
