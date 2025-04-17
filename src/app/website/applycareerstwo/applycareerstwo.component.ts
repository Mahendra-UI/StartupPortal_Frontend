import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/website/register.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-applycareerstwo',
  templateUrl: './applycareerstwo.component.html',
  styleUrls: ['./applycareerstwo.component.css']
})
export class ApplycareerstwoComponent implements OnInit {

  currentStep = 1;

  nextStep() {
    console.log('Current Step:', this.currentStep);
  
    if (this.currentStep === 1) {
      console.log('Step 1 Form Values:', this.careersForm.value);
      console.log('Resume Selected:', this.selectedResume);
      console.log('Passport Selected:', this.selectedPassport);
  
      if (
        this.careersForm.get('fullName')?.valid &&
        this.careersForm.get('dateOfBirth')?.valid &&
        this.careersForm.get('mobileNumber')?.valid &&
        this.careersForm.get('emailId')?.valid &&
        this.careersForm.get('applyPost')?.valid &&
        this.careersForm.get('nirfranking')?.valid &&
        this.careersForm.get('communicationAddress')?.valid &&
        this.selectedResume &&
        this.selectedPassport
      ) {
        this.currentStep++;
      } else {
        this.toastr.warning('Please complete all fields in Personal Details and upload Resume and Passport.');
        Swal.fire({
          icon: 'warning',
          title: 'Incomplete Details',
          text: 'Please complete all fields in Personal Details and upload Resume and Passport.',
          confirmButtonColor: '#3085d6'
        });
      }
    } else if (this.currentStep === 2 && this.educationList.length > 0) {
      this.currentStep++;
    } else if (this.currentStep === 3 && this.workExperienceList.length > 0) {
      this.currentStep++;
    } else if (
      this.currentStep === 4 &&
      this.careersForm.get('declarationConfirmed')?.value &&
      this.selectedResume &&
      this.selectedPassport &&
      this.educationList.length > 0 &&
      this.workExperienceList.length > 0
    ) {
      this.currentStep++;
    } else {
      this.toastr.warning('Please complete the current section.');
      Swal.fire({
        icon: 'warning',
        title: 'Incomplete Details',
        text: 'Please complete the current section.',
        confirmButtonColor: '#3085d6'
      });
    }
  }
    
  
  
  
  previousStep() {
    if (this.currentStep > 1) this.currentStep--;
  }
  
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
      nirfranking: ['99'], // <-- dummy static value
      // nirfranking: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      remarks: [''],
      communicationAddress: ['', Validators.required],
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
  
      // Success feedback
      this.toastr.success('Education details added successfully.');
      Swal.fire('Success', 'Education details added successfully.', 'success');
    } else {
      this.toastr.warning('Fill all education fields and attach certificate.');
      Swal.fire('Warning', 'Please fill all education fields and attach the certificate.', 'warning');
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
  
      // Success feedback
      this.toastr.success('Work experience added successfully.');
      Swal.fire('Success', 'Work experience added successfully.', 'success');
    } else {
      this.toastr.warning('Fill all experience fields and attach certificate.');
      Swal.fire('Warning', 'Please fill all work experience fields and attach the certificate.', 'warning');
    }
  }
  
  

  previewDownload(file: File, filename: string) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
  
    reader.onload = () => {
      const base64 = (reader.result as string).split(',')[1]; // remove prefix
      const mimeType = file.type || this.detectMimeType(base64);
      const extension = this.getFileExtensionFromMime(mimeType);
      const fullFileName = `${filename}.${extension}`;
      const link = document.createElement('a');
      link.href = `data:${mimeType};base64,${base64}`;
      link.download = fullFileName;
      link.click();
    };
  
    reader.onerror = (err) => {
      this.toastr.error('Failed to read file for preview download.');
      console.error('FileReader error:', err);
    };
  }

  getFileExtensionFromMime(mime: string): string {
    switch (mime) {
      case 'application/pdf': return 'pdf';
      case 'image/jpeg': return 'jpg';
      case 'image/png': return 'png';
      case 'image/gif': return 'gif';
      default: return 'bin';
    }
  }
  
  detectMimeType(base64: string): string {
    if (base64.startsWith('/9j/')) return 'image/jpeg';
    if (base64.startsWith('iVBOR')) return 'image/png';
    if (base64.startsWith('JVBER')) return 'application/pdf';
    if (base64.startsWith('R0lGOD')) return 'image/gif';
    return 'application/octet-stream';
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
          this.toastr.success('Work experience added successfully.');
          Swal.fire('Success', 'Submitted Successfully', 'success');
          this.resetFormData();
          this.currentStep = 1; // 👈 go to Step 1
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
