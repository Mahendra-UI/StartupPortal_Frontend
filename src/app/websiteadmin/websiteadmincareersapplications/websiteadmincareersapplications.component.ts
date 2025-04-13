// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-websiteadmincareersapplications',
//   templateUrl: './websiteadmincareersapplications.component.html',
//   styleUrls: ['./websiteadmincareersapplications.component.css']
// })
// export class WebsiteadmincareersapplicationsComponent implements OnInit {

//   actionForm! : FormGroup
//   isLoading = false; // Loader flag

//   constructor(private fb: FormBuilder) { }

//   ngOnInit(): void {
//   }
//   submitAction() {

//   }

// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/website/register.service';

@Component({
  selector: 'app-websiteadmincareersapplications',
  templateUrl: './websiteadmincareersapplications.component.html',
  styleUrls: ['./websiteadmincareersapplications.component.css']
})
export class WebsiteadmincareersapplicationsComponent implements OnInit {

  actionForm! : FormGroup
  isLoading = false; // Loader flag

  applicantsList: any[] = [];
  selectedApplicant: any = null;

  constructor(private registerService: RegisterService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getAllApplicants();
  }

    submitAction() {

  }
  getAllApplicants() {
    this.registerService.getApplicants().subscribe((res: any) => {
      if (res?.status === 'Valid') {
        this.applicantsList = res.data;
        console.log(this.applicantsList, "applicantsList");
        
      }
    });
  }

  viewApplicant(applicantId: number) {
    console.log('Calling API with ID:', applicantId);
  
    this.registerService.getApplicantById(applicantId).subscribe({
      next: (res: any) => {
        console.log('API Response:', res);
        if (res?.status === 'Valid') {
          this.selectedApplicant = res.data;
        }
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  }
  
  
}
