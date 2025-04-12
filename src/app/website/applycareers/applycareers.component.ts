// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { RegisterService } from 'src/app/website/register.service';

// @Component({
//   selector: 'app-applycareers',
//   templateUrl: './applycareers.component.html',
//   styleUrls: ['./applycareers.component.css']
// })
// export class ApplycareersComponent implements OnInit {
//   careersForm!: FormGroup;
//   educationForm!: FormGroup;
//   workExperienceForm!: FormGroup;

//   educationList: any[] = [];
//   workExperienceList: any[] = [];
//   selectedResume: File | null = null;
//   selectedCertificate: File | null = null;
//   selectedExperienceCertificate: File | null = null;

//   constructor(private fb: FormBuilder, private registerService: RegisterService) {}

//   ngOnInit(): void {
//     this.careersForm = this.fb.group({
//       fullName: ['', Validators.required],
//       fatherName: ['', Validators.required],
//       mobileNumber: ['', Validators.required],
//       emailId: ['', [Validators.required, Validators.email]],
//       applyPost: ['', Validators.required],
//       resume: [null, Validators.required],
//       nirfranking: ['', Validators.required],
//       remarks: ['']
//     });

//     this.educationForm = this.fb.group({
//       qualification: ['', Validators.required],
//       schoolcollegeinstitute: ['', Validators.required],
//       boarduniversity: ['', Validators.required],
//       yearofpass: ['', Validators.required],
//       percentagecgpa: ['', Validators.required],
//       uploadcertificate: [null, Validators.required]
//     });

//     this.workExperienceForm = this.fb.group({
//       organizationName: ['', Validators.required],
//       designationName: ['', Validators.required],
//       from: ['', Validators.required],
//       to: ['', Validators.required],
//       rolesresponsibilities: ['', Validators.required],
//       experienceCertificate: [null, Validators.required]
//     });
//   }

//   onFileChangeResume(event: any) {
//     this.selectedResume = event.target.files[0];
//   }

//   onFileChangeCertificate(event: any) {
//     this.selectedCertificate = event.target.files[0];
//   }

//   onFileChangeExperienceCertificate(event: any) {
//     this.selectedExperienceCertificate = event.target.files[0];
//   }

//   onEducationSubmit() {
//     if (this.educationForm.valid) {
//       const eduData = {
//         qualification: this.educationForm.value.qualification,
//         institute: this.educationForm.value.schoolcollegeinstitute,
//         board: this.educationForm.value.boarduniversity,
//         yearOfPassing: this.educationForm.value.yearofpass,
//         totalAggregate: this.educationForm.value.percentagecgpa,
//         certificateFile: this.selectedCertificate?.name || ''
//       };
//       this.educationList.push(eduData);
//       console.log('Education Added:', eduData);
//       this.educationForm.reset();
//       this.selectedCertificate = null;
//     }
//   }

//   onWorkExperienceSubmit() {
//     if (this.workExperienceForm.valid) {
//       const workData = {
//         companyName: this.workExperienceForm.value.organizationName,
//         designation: this.workExperienceForm.value.designationName,
//         from: new Date(this.workExperienceForm.value.from).toISOString(),
//         to: new Date(this.workExperienceForm.value.to).toISOString(),
//         rolesAndResponsibilities: this.workExperienceForm.value.rolesresponsibilities,
//         experienceCertificate: this.selectedExperienceCertificate?.name || ''
//       };
//       this.workExperienceList.push(workData);
//       console.log('Work Experience Added:', workData);
//       this.workExperienceForm.reset();
//       this.selectedExperienceCertificate = null;
//     }
//   }

//   onSubmit() {
//     if (this.careersForm.invalid || !this.selectedResume) return;
  
//     const formData = new FormData();
//     formData.append('ApplicantId', '1');
//     formData.append('ApplicantName', this.careersForm.value.fullName);
//     formData.append('FathertName', this.careersForm.value.fatherName);
//     formData.append('MobileNumber', this.careersForm.value.mobileNumber);
//     formData.append('EmailID', this.careersForm.value.emailId);
//     formData.append('ApplyPost', this.careersForm.value.applyPost);
//     formData.append('UniversityRanking', this.careersForm.value.nirfranking);
//     formData.append('Remarks', this.careersForm.value.remarks);
//     formData.append('Status', 'pending');
//     formData.append('SubmittedOn', new Date().toISOString());
  
//     // Attach resume
//     formData.append('CVFile', this.selectedResume.name);
//     formData.append('CVFileUpload', this.selectedResume);
  
//     // Attach Education Certificate File Upload
//     if (this.selectedCertificate) {
//       formData.append('certificateFileUpload', this.selectedCertificate);
//     }
  
//     // Attach Experience Certificate File Upload
//     if (this.selectedExperienceCertificate) {
//       formData.append('experienceCertificateUpload', this.selectedExperienceCertificate);
//     }
  
//     // Add JSON data
//     if (this.educationList.length) {
//       formData.append('EducationDetails', JSON.stringify(this.educationList.map((item, index) => ({
//         id: index + 1,
//         ...item
//       }))));
//     }
  
//     if (this.workExperienceList.length) {
//       formData.append('WorkExperience', JSON.stringify(this.workExperienceList.map((item, index) => ({
//         id: index + 1,
//         ...item
//       }))));
//     }
  
//     console.log('Submitting FormData to API...');
//     const debugLog: any = {};
//     formData.forEach((value, key) => {
//       debugLog[key] = value;
//     });
//     console.log('FormData Content:', debugLog);
  
//     this.registerService.submitCareerApplication(formData).subscribe({
//       next: (res) => {
//         console.log('API Success:', res);
//         alert('Submitted Successfully');
//       },
//       error: (err) => {
//         console.error('API Error:', err);
//         alert('Submission Failed');
//       }
//     });
//   }
  

// }










// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { RegisterService } from 'src/app/website/register.service';

// @Component({
//   selector: 'app-applycareers',
//   templateUrl: './applycareers.component.html',
//   styleUrls: ['./applycareers.component.css']
// })
// export class ApplycareersComponent implements OnInit {
//   careersForm!: FormGroup;
//   educationForm!: FormGroup;
//   workExperienceForm!: FormGroup;

//   educationList: any[] = [];
//   workExperienceList: any[] = [];
//   selectedResume: File | null = null;
//   selectedCertificate: File | null = null;
//   selectedExperienceCertificate: File | null = null;

//   constructor(private fb: FormBuilder, private registerService: RegisterService) {}

//   ngOnInit(): void {
//     this.careersForm = this.fb.group({
//       fullName: ['', Validators.required],
//       fatherName: ['', Validators.required],
//       mobileNumber: ['', Validators.required],
//       emailId: ['', [Validators.required, Validators.email]],
//       applyPost: ['', Validators.required],
//       resume: [null, Validators.required],
//       nirfranking: ['', Validators.required],
//       remarks: ['']
//     });

//     this.educationForm = this.fb.group({
//       qualification: ['', Validators.required],
//       schoolcollegeinstitute: ['', Validators.required],
//       boarduniversity: ['', Validators.required],
//       yearofpass: ['', Validators.required],
//       percentagecgpa: ['', Validators.required],
//       uploadcertificate: [null, Validators.required]
//     });

//     this.workExperienceForm = this.fb.group({
//       organizationName: ['', Validators.required],
//       designationName: ['', Validators.required],
//       from: ['', Validators.required],
//       to: ['', Validators.required],
//       rolesresponsibilities: ['', Validators.required],
//       experienceCertificate: [null, Validators.required]
//     });
//   }

//   onFileChangeResume(event: any) {
//     this.selectedResume = event.target.files[0];
//   }

//   onFileChangeCertificate(event: any) {
//     this.selectedCertificate = event.target.files[0];
//   }

//   onFileChangeExperienceCertificate(event: any) {
//     this.selectedExperienceCertificate = event.target.files[0];
//   }

//   onEducationSubmit() {
//     if (this.educationForm.valid) {
//       const eduData = {
//         qualification: this.educationForm.value.qualification,
//         institute: this.educationForm.value.schoolcollegeinstitute,
//         board: this.educationForm.value.boarduniversity,
//         yearOfPassing: this.educationForm.value.yearofpass,
//         totalAggregate: this.educationForm.value.percentagecgpa,
//         certificateFile: this.selectedCertificate?.name || '',
//         certificateFileUpload: this.selectedCertificate || null
//       };
//       this.educationList.push(eduData);
//       this.educationForm.reset();
//       this.selectedCertificate = null;
//     }
//   }

//   onWorkExperienceSubmit() {
//     if (this.workExperienceForm.valid) {
//       const workData = {
//         companyName: this.workExperienceForm.value.organizationName,
//         designation: this.workExperienceForm.value.designationName,
//         from: new Date(this.workExperienceForm.value.from).toISOString(),
//         to: new Date(this.workExperienceForm.value.to).toISOString(),
//         rolesAndResponsibilities: this.workExperienceForm.value.rolesresponsibilities,
//         experienceCertificate: this.selectedExperienceCertificate?.name || '',
//         experienceCertificateUpload: this.selectedExperienceCertificate || null
//       };
//       this.workExperienceList.push(workData);
//       this.workExperienceForm.reset();
//       this.selectedExperienceCertificate = null;
//     }
//   }

//   onSubmit() {
//     if (this.careersForm.invalid || !this.selectedResume) return;

//     const formData = new FormData();
//     formData.append('ApplicantId', '1');
//     formData.append('ApplicantName', this.careersForm.value.fullName);
//     formData.append('FathertName', this.careersForm.value.fatherName);
//     formData.append('MobileNumber', this.careersForm.value.mobileNumber);
//     formData.append('EmailID', this.careersForm.value.emailId);
//     formData.append('ApplyPost', this.careersForm.value.applyPost);
//     formData.append('UniversityRanking', this.careersForm.value.nirfranking);
//     formData.append('Remarks', this.careersForm.value.remarks);
//     formData.append('Status', 'pending');
//     formData.append('SubmittedOn', new Date().toISOString());

//     formData.append('CVFile', this.selectedResume.name);
//     formData.append('CVFileUpload', this.selectedResume);

//     this.educationList.forEach((edu, index) => {
//       formData.append(`EducationDetails[${index}].qualification`, edu.qualification);
//       formData.append(`EducationDetails[${index}].institute`, edu.institute);
//       formData.append(`EducationDetails[${index}].board`, edu.board);
//       formData.append(`EducationDetails[${index}].yearOfPassing`, edu.yearOfPassing);
//       formData.append(`EducationDetails[${index}].totalAggregate`, edu.totalAggregate);
//       formData.append(`EducationDetails[${index}].certificateFile`, edu.certificateFile);
//       if (edu.certificateFileUpload) {
//         formData.append(`EducationDetails[${index}].certificateFileUpload`, edu.certificateFileUpload);
//       }
//     });

//     this.workExperienceList.forEach((work, index) => {
//       formData.append(`WorkExperience[${index}].companyName`, work.companyName);
//       formData.append(`WorkExperience[${index}].designation`, work.designation);
//       formData.append(`WorkExperience[${index}].from`, work.from);
//       formData.append(`WorkExperience[${index}].to`, work.to);
//       formData.append(`WorkExperience[${index}].rolesAndResponsibilities`, work.rolesAndResponsibilities);
//       formData.append(`WorkExperience[${index}].experienceCertificate`, work.experienceCertificate);
//       if (work.experienceCertificateUpload) {
//         formData.append(`WorkExperience[${index}].experienceCertificateUpload`, work.experienceCertificateUpload);
//       }
//     });

//     console.log('FormData Content:');
//     const debugLog: any = {};
//     formData.forEach((value, key) => {
//       debugLog[key] = value;
//     });
//     console.log(debugLog);

//     this.registerService.submitCareerApplication(formData).subscribe({
//       next: (res) => {
//         console.log('API Success:', res);
//         alert('Submitted Successfully');
//       },
//       error: (err) => {
//         console.error('API Error:', err);
//         alert('Submission Failed');
//       }
//     });
//   }
// }



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/website/register.service';

@Component({
  selector: 'app-applycareers',
  templateUrl: './applycareers.component.html',
  styleUrls: ['./applycareers.component.css']
})
export class ApplycareersComponent implements OnInit {
  careersForm!: FormGroup;
  educationForm!: FormGroup;
  workExperienceForm!: FormGroup;

  educationList: any[] = [];
  workExperienceList: any[] = [];
  selectedResume: File | null = null;
  selectedCertificate: File | null = null;
  selectedExperienceCertificate: File | null = null;

  constructor(private fb: FormBuilder, private registerService: RegisterService) {}

  ngOnInit(): void {
    this.careersForm = this.fb.group({
      fullName: ['', Validators.required],
      fatherName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      applyPost: ['', Validators.required],
      resume: [null, Validators.required],
      nirfranking: ['', Validators.required],
      remarks: ['']
    });

    this.educationForm = this.fb.group({
      qualification: ['', Validators.required],
      schoolcollegeinstitute: ['', Validators.required],
      boarduniversity: ['', Validators.required],
      yearofpass: ['', Validators.required],
      percentagecgpa: ['', Validators.required],
      uploadcertificate: [null, Validators.required]
    });

    this.workExperienceForm = this.fb.group({
      organizationName: ['', Validators.required],
      designationName: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      rolesresponsibilities: ['', Validators.required],
      experienceCertificate: [null, Validators.required]
    });
  }

  onFileChangeResume(event: any) {
    this.selectedResume = event.target.files[0];
  }

  onFileChangeCertificate(event: any) {
    this.selectedCertificate = event.target.files[0];
  }

  onFileChangeExperienceCertificate(event: any) {
    this.selectedExperienceCertificate = event.target.files[0];
  }

  onEducationSubmit() {
    if (this.educationForm.valid) {
      const eduData = {
        qualification: this.educationForm.value.qualification,
        institute: this.educationForm.value.schoolcollegeinstitute,
        board: this.educationForm.value.boarduniversity,
        yearOfPassing: this.educationForm.value.yearofpass,
        totalAggregate: this.educationForm.value.percentagecgpa,
        certificateFile: this.selectedCertificate?.name || '',
        certificateFileUpload: this.selectedCertificate || null
      };
      this.educationList.push(eduData);
      console.log('Education Added:', eduData);
      console.log('All Education Entries:', this.educationList);
      this.educationForm.reset();
      this.selectedCertificate = null;
    }
  }

  onWorkExperienceSubmit() {
    if (this.workExperienceForm.valid) {
      const workData = {
        companyName: this.workExperienceForm.value.organizationName,
        designation: this.workExperienceForm.value.designationName,
        from: new Date(this.workExperienceForm.value.from).toISOString(),
        to: new Date(this.workExperienceForm.value.to).toISOString(),
        rolesAndResponsibilities: this.workExperienceForm.value.rolesresponsibilities,
        experienceCertificate: this.selectedExperienceCertificate?.name || '',
        experienceCertificateUpload: this.selectedExperienceCertificate || null
      };
      this.workExperienceList.push(workData);
      console.log('Work Experience Added:', workData);
      console.log('All Work Experience Entries:', this.workExperienceList);
      this.workExperienceForm.reset();
      this.selectedExperienceCertificate = null;
    }
  }

  onSubmit() {
    if (this.careersForm.invalid || !this.selectedResume) return;

    const formData = new FormData();
    // formData.append('ApplicantId', '1'); // Hidden or removed as per instruction
    formData.append('ApplicantName', this.careersForm.value.fullName);
    formData.append('FathertName', this.careersForm.value.fatherName);
    formData.append('MobileNumber', this.careersForm.value.mobileNumber);
    formData.append('EmailID', this.careersForm.value.emailId);
    formData.append('ApplyPost', this.careersForm.value.applyPost);
    formData.append('UniversityRanking', this.careersForm.value.nirfranking);
    formData.append('Remarks', this.careersForm.value.remarks);
    formData.append('Status', 'pending');
    formData.append('SubmittedOn', new Date().toISOString());

    formData.append('CVFile', this.selectedResume.name);
    formData.append('CVFileUpload', this.selectedResume);

    this.educationList.forEach((edu, index) => {
      formData.append(`EducationDetails[${index}].qualification`, edu.qualification);
      formData.append(`EducationDetails[${index}].institute`, edu.institute);
      formData.append(`EducationDetails[${index}].board`, edu.board);
      formData.append(`EducationDetails[${index}].yearOfPassing`, edu.yearOfPassing);
      formData.append(`EducationDetails[${index}].totalAggregate`, edu.totalAggregate);
      formData.append(`EducationDetails[${index}].certificateFile`, edu.certificateFile);
      if (edu.certificateFileUpload) {
        formData.append(`EducationDetails[${index}].certificateFileUpload`, edu.certificateFileUpload);
      }
    });
    console.log('All Education Entries:', this.educationList);

    this.workExperienceList.forEach((work, index) => {
      formData.append(`WorkExperience[${index}].companyName`, work.companyName);
      formData.append(`WorkExperience[${index}].designation`, work.designation);
      formData.append(`WorkExperience[${index}].from`, work.from);
      formData.append(`WorkExperience[${index}].to`, work.to);
      formData.append(`WorkExperience[${index}].rolesAndResponsibilities`, work.rolesAndResponsibilities);
      formData.append(`WorkExperience[${index}].experienceCertificate`, work.experienceCertificate);
      if (work.experienceCertificateUpload) {
        formData.append(`WorkExperience[${index}].experienceCertificateUpload`, work.experienceCertificateUpload);
      }
    });
    console.log('All Work Experience Entries:', this.workExperienceList);

    console.log('FormData Content:');
    const debugLog: any = {};
    formData.forEach((value, key) => {
      debugLog[key] = value;
    });
    console.log(debugLog);

    this.registerService.submitCareerApplication(formData).subscribe({
      next: (res) => {
        console.log('API Success:', res);
        alert('Submitted Successfully');
      },
      error: (err) => {
        console.error('API Error:', err);
        alert('Submission Failed');
      }
    });
  }
} 
