import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/translation.service';

@Component({
  selector: 'app-dedicatedteam',
  templateUrl: './dedicatedteam.component.html',
  styleUrls: ['./dedicatedteam.component.css']
})
export class DedicatedteamComponent implements OnInit {
  isTranslationTelugu: boolean = false;
  constructor(private translationSer: TranslationService) { }
  ngOnInit(): void {
    this.translationSer.valBoolean.subscribe((key: boolean) => {
      this.isTranslationTelugu = key
    });
  }

}
