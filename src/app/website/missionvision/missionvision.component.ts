import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/translation.service';

@Component({
  selector: 'app-missionvision',
  templateUrl: './missionvision.component.html',
  styleUrls: ['./missionvision.component.css']
})
export class MissionvisionComponent implements OnInit {

  isTranslationTelugu: boolean = false;
  constructor(private translationSer: TranslationService) { }
  ngOnInit(): void {
    this.translationSer.valBoolean.subscribe((key: boolean) => {
      this.isTranslationTelugu = key
    });
  }

}
