import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/translation.service';

@Component({
  selector: 'app-nodalagency',
  templateUrl: './nodalagency.component.html',
  styleUrls: ['./nodalagency.component.css']
})
export class NodalagencyComponent implements OnInit {
  isTranslationTelugu: boolean = false;
  constructor(private translationSer: TranslationService) { }
  ngOnInit(): void {
    this.translationSer.valBoolean.subscribe((key: boolean) => {
      this.isTranslationTelugu = key
    });
  }

}
