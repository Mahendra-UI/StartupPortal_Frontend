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
//       console.log('Education Added:', eduData);
//       console.log('All Education Entries:', this.educationList);
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
//       console.log('Work Experience Added:', workData);
//       console.log('All Work Experience Entries:', this.workExperienceList);
//       this.workExperienceForm.reset();
//       this.selectedExperienceCertificate = null;
//     }
//   }

//   onSubmitold() {
//     if (this.careersForm.invalid || !this.selectedResume) return;

//     const formData = new FormData();
//     // formData.append('ApplicantId', '1'); // Hidden or removed as per instruction
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
//     console.log('All Education Entries:', this.educationList);

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
//     console.log('All Work Experience Entries:', this.workExperienceList);

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
//   onSubmit() {
//     // if(this.careersForm.valid) {
//       var obj = {
//         "applicantId": 0,
//         "applicantName": "string",
//         "fathertName": "string",
//         "emailID": "string",
//         "mobileNumber": "string",
//         "applyPost": "string",
//         "submittedOn": "2025-04-13T03:50:56.060Z",
//         "status": "string",
//         "remarks": "string",
//         "universityRanking": 0,
//         "cvFile": "string",
//         "educationDetails": [
//           {
//             "id": 0,
//             "qualification": "string",
//             "institute": "string",
//             "board": "string",
//             "yearOfPassing": 0,
//             "totalAggregate": 0,
//             "certificateFile": "string"
//           }
//         ],
//         "workExperience": [
//           {
//             "id": 0,
//             "companyName": "string",
//             "designation": "string",
//             "experienceCertificate": "string",
//             "from": "2025-04-13T03:50:56.060Z",
//             "to": "2025-04-13T03:50:56.060Z",
//             "rolesAndResponsibilities": "string"
//           }
//         ]
//       }
//       this.registerService.submitCareerApplication(obj).subscribe({
//         next: (res) => {
//           console.log('API Success:', res);
//           alert('Submitted Successfully');
//         },
//         error: (err) => {
//           console.error('API Error:', err);
//           alert('Submission Failed');
//         }
//       });
//     }
//   // }
// } 














// new starts













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
//       nirfranking: ['', Validators.required],
//       remarks: [''],
//       resume: [null, Validators.required]
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
//         certificateFileUpload: this.selectedCertificate,
//         certificateFile: this.selectedCertificate?.name || ''
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
//         experienceCertificateUpload: this.selectedExperienceCertificate,
//         experienceCertificate: this.selectedExperienceCertificate?.name || ''
//       };
//       this.workExperienceList.push(workData);
//       this.workExperienceForm.reset();
//       this.selectedExperienceCertificate = null;
//     }
//   }

//   fileToBase64(file: File): Promise<string> {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve((reader.result as string).split(',')[1]);
//       reader.onerror = error => reject(error);
//     });
//   }

//   async onSubmit() {
//     if (this.careersForm.invalid || !this.selectedResume) return;

//     const cvFileBase64 = await this.fileToBase64(this.selectedResume);

//     const EducationDetails = await Promise.all(this.educationList.map(async (edu) => ({
//       Qualification: edu.qualification,
//       Institute: edu.institute,
//       Board: edu.board,
//       YearOfPassing: Number(edu.yearOfPassing),
//       TotalAggregate: Number(edu.totalAggregate),
//       CertificateFile: edu.certificateFileUpload ? await this.fileToBase64(edu.certificateFileUpload) : ''
//     })));

//     const WorkExperience = await Promise.all(this.workExperienceList.map(async (work) => ({
//       CompanyName: work.companyName,
//       Designation: work.designation,
//       From: new Date(work.from).toISOString(),
//       To: new Date(work.to).toISOString(),
//       RolesAndResponsibilities: work.rolesAndResponsibilities,
//       ExperienceCertificate: work.experienceCertificateUpload ? await this.fileToBase64(work.experienceCertificateUpload) : ''
//     })));

//     const payload = {
//       ApplicantName: this.careersForm.value.fullName,
//       FathertName: this.careersForm.value.fatherName,
//       MobileNumber: this.careersForm.value.mobileNumber,
//       EmailID: this.careersForm.value.emailId,
//       ApplyPost: this.careersForm.value.applyPost,
//       SubmittedOn: new Date().toISOString(),
//       Status: 'pending',
//       Remarks: this.careersForm.value.remarks,
//       UniversityRanking: Number(this.careersForm.value.nirfranking),
//       CVFile: cvFileBase64,
//       EducationDetails,
//       WorkExperience
//     };

//     this.registerService.submitCareerApplication(payload).subscribe({
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









// applycareers.component.ts (Corrected)
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/website/register.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

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
  selectedPassport: File | null = null;
  selectedCertificate: File | null = null;
  selectedExperienceCertificate: File | null = null;

  resumeTouched = false;
  passportTouched = false;
  certificateTouched = false;
  experienceCertTouched = false;

  @ViewChild('resumeInput') resumeInputRef!: any;
  @ViewChild('passportInput') passportInputRef!: any;
  @ViewChild('certificateInput') certificateInputRef!: any;
  @ViewChild('experienceInput') experienceInputRef!: any;


  qualificationOptions: string[] = [
    'Class X/Equivalent',
    'Intermediate/Equivalent',
    'Graduation',
    'Post-Graduation',
    'Additional Qualifications'
  ];
  

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.careersForm = this.fb.group({
      fullName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      emailId: ['', [Validators.required, Validators.email]],
      applyPost: ['', Validators.required],
      nirfranking: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      remarks: [''],
      communicationAddress: ['', Validators.required],
      resume: [null, Validators.required],
      passport: [null, Validators.required],
      declarationConfirmed: [false, Validators.requiredTrue]
    });

    this.educationForm = this.fb.group({
      qualification: ['', Validators.required],
      schoolcollegeinstitute: ['', Validators.required],
      boarduniversity: ['', Validators.required],
      yearofpass: ['', Validators.required],
      percentagecgpa: ['', [Validators.required, Validators.pattern('^[0-9.]+$')]],
      uploadcertificate: [null, Validators.required]
    });

    this.workExperienceForm = this.fb.group({
      organizationName: ['', Validators.required],
      designationName: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      experienceCertificate: [null, Validators.required]
    });
  }

  validateFile(file: File): boolean {
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
    const maxSizeMB = 2;
    return allowedTypes.includes(file.type) && file.size <= maxSizeMB * 1024 * 1024;
  }

  

  onFileChangeResume(event: any) {
    this.resumeTouched = true;
    const file = event.target.files[0];
    if (file && this.validateFile(file)) {
      this.selectedResume = file;
    } else {
      this.toastr.warning('Invalid resume file.');
      this.selectedResume = null;
      this.careersForm.get('resume')?.reset();
      this.resumeInputRef.nativeElement.value = '';
    }
  }

  onFileChangePassport(event: any) {
    this.passportTouched = true;
    const file = event.target.files[0];
    if (file && this.validateFile(file)) {
      this.selectedPassport = file;
    } else {
      this.toastr.warning('Invalid passport image.');
      this.selectedPassport = null;
      this.careersForm.get('passport')?.reset();
      this.passportInputRef.nativeElement.value = '';
    }
  }

  onFileChangeCertificate(event: any) {
    this.certificateTouched = true;
    const file = event.target.files[0];
    if (file && this.validateFile(file)) {
      this.selectedCertificate = file;
      this.educationForm.get('uploadcertificate')?.setValue(file);
    } else {
      this.toastr.warning('Invalid certificate file.');
      this.selectedCertificate = null;
      this.educationForm.get('uploadcertificate')?.reset();
      this.certificateInputRef.nativeElement.value = '';
    }
  }

  onFileChangeExperienceCertificate(event: any) {
    this.experienceCertTouched = true;
    const file = event.target.files[0];
    if (file && this.validateFile(file)) {
      this.selectedExperienceCertificate = file;
      this.workExperienceForm.get('experienceCertificate')?.setValue(file);
    } else {
      this.toastr.warning('Invalid experience certificate.');
      this.selectedExperienceCertificate = null;
      this.workExperienceForm.get('experienceCertificate')?.reset();
      this.experienceInputRef.nativeElement.value = '';
    }
  }

  fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        const base64 = result.split(',')[1]; // Get only base64 part
        resolve(base64);
      };
      reader.onerror = error => reject(error);
    });
  }
  
  onEducationSubmit() {
    if (this.educationForm.valid && this.selectedCertificate) {
      const eduData = {
        qualification: this.educationForm.value.qualification,
        institute: this.educationForm.value.schoolcollegeinstitute,
        board: this.educationForm.value.boarduniversity,
        yearOfPassing: this.educationForm.value.yearofpass,
        totalAggregate: this.educationForm.value.percentagecgpa,
        certificateFileUpload: this.selectedCertificate,
        certificateFile: this.selectedCertificate.name
      };
      this.educationList.push(eduData);
      this.educationForm.reset();
      this.selectedCertificate = null;
      this.certificateTouched = false;
      this.certificateInputRef.nativeElement.value = '';
    } else {
      this.toastr.warning('Fill all education fields and attach certificate.');
    }
  }
  
  onWorkExperienceSubmit() {
    if (this.workExperienceForm.valid && this.selectedExperienceCertificate) {
      const workData = {
        companyName: this.workExperienceForm.value.organizationName,
        designation: this.workExperienceForm.value.designationName,
        from: new Date(this.workExperienceForm.value.from).toISOString(),
        to: new Date(this.workExperienceForm.value.to).toISOString(),
        experienceCertificateUpload: this.selectedExperienceCertificate,
        experienceCertificate: this.selectedExperienceCertificate.name
      };
      this.workExperienceList.push(workData);
      this.workExperienceForm.reset();
      this.selectedExperienceCertificate = null;
      this.experienceCertTouched = false;
      this.experienceInputRef.nativeElement.value = '';
    } else {
      this.toastr.warning('Fill all experience fields and attach certificate.');
    }
  }
  

  async onSubmit() {
    if (this.careersForm.invalid || !this.selectedResume || !this.selectedPassport) {
      this.toastr.error('Complete the form and upload files.');
      return;
    }
  
    this.spinner.show();
    
  
    try {
      const payload = {
        applicantName: this.careersForm.value.fullName,
        dateOfBirth: this.formatToDDMMYYYY(this.careersForm.value.dateOfBirth),
        // dateOfBirth: this.careersForm.value.dateOfBirth,
        emailID: this.careersForm.value.emailId,
        mobileNumber: this.careersForm.value.mobileNumber,
        applyPost: this.careersForm.value.applyPost,
        submittedOn: new Date().toISOString(),
        status: 'pending',
        remarks: this.careersForm.value.remarks || '',
        universityRanking: Number(this.careersForm.value.nirfranking),
        cvFile: await this.fileToBase64(this.selectedResume!),
        passportImage: await this.fileToBase64(this.selectedPassport!),
        communicationAddress: this.careersForm.value.communicationAddress || '',
        educationDetails: await Promise.all(
          this.educationList.map(async (edu) => ({
            qualification: edu.qualification,
            institute: edu.institute,
            board: edu.board,
            yearOfPassing: Number(edu.yearOfPassing),
            totalAggregate: Number(edu.totalAggregate),
            certificateFile: await this.fileToBase64(edu.certificateFileUpload),
          }))
        ),
        workExperience: await Promise.all(
          this.workExperienceList.map(async (work) => ({
            companyName: work.companyName,
            designation: work.designation,
            experienceCertificate: await this.fileToBase64(work.experienceCertificateUpload),
            from: work.from,
            to: work.to,
          }))
        ),
      };
  
      console.log('Payload to be submitted:', payload); // ✅ Add this line
  
      this.registerService.submitCareerApplication(payload).subscribe({
        next: (res) => {
          this.spinner.hide();
          Swal.fire('Success', 'Submitted Successfully', 'success');
          this.resetFormData();
        },
        error: (err) => {
          this.spinner.hide();
          this.toastr.error('Submission failed.');
          console.error('API Error:', err); // ✅ Error log
        },
      });
    } catch (err) {
      this.spinner.hide();
      this.toastr.error('File encoding failed.');
      console.error('Encoding Error:', err); // ✅ File encoding failure
    }
  }
  
  formatToDDMMYYYY(date: string): string {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  }
  
  
  resetFormData() {
    this.careersForm.reset();
    this.educationForm.reset();
    this.workExperienceForm.reset();
    this.educationList = [];
    this.workExperienceList = [];
    this.selectedResume = null;
    this.selectedPassport = null;
    this.resumeInputRef.nativeElement.value = '';
    this.passportInputRef.nativeElement.value = '';
  }
  
  
}

