import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/translation.service';

@Component({
  selector: 'app-executivecommitte',
  templateUrl: './executivecommitte.component.html',
  styleUrls: ['./executivecommitte.component.css']
})
export class ExecutivecommitteComponent implements OnInit {

  isTranslationTelugu: boolean = false;
  constructor(private translationSer: TranslationService) { }
  ngOnInit(): void {
    this.translationSer.valBoolean.subscribe((key: boolean) => {
      this.isTranslationTelugu = key
    });
  }


}
