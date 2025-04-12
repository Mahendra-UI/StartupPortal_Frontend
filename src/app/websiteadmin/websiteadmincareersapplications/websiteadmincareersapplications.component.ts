import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-websiteadmincareersapplications',
  templateUrl: './websiteadmincareersapplications.component.html',
  styleUrls: ['./websiteadmincareersapplications.component.css']
})
export class WebsiteadmincareersapplicationsComponent implements OnInit {

  actionForm! : FormGroup
  isLoading = false; // Loader flag

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  submitAction() {

  }

}
