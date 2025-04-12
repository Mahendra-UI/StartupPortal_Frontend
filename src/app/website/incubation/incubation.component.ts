import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/translation.service';

@Component({
  selector: 'app-incubation',
  templateUrl: './incubation.component.html',
  styleUrls: ['./incubation.component.css']
})
export class IncubationComponent implements OnInit {

  isTranslationTelugu: boolean = false;
  constructor(private translationSer: TranslationService) { }
  ngOnInit(): void {
    this.translationSer.valBoolean.subscribe((key: boolean) => {
      this.isTranslationTelugu = key
    });
  }

}
