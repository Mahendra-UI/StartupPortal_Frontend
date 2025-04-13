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
import { NgxSpinnerService } from 'ngx-spinner';
import { RegisterService } from 'src/app/website/register.service';
import Swal from 'sweetalert2';

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

  constructor(private registerService: RegisterService, private fb: FormBuilder, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.getAllApplicants();
  }

    submitAction() {

  }
  getAllApplicants() {
    this.spinner.show();
    this.registerService.getApplicants().subscribe({
      next: (res: any) => {
        if (res?.status === 'Valid') {
          this.applicantsList = res.data;
          console.log(this.applicantsList, "applicantsList");
        }
        this.spinner.hide();
      },
      error: (err) => {
        console.error('Error fetching applicants:', err);
        this.spinner.hide();
      }
    });
  }
  
  viewApplicant(applicantId: number) {
    console.log('Calling API with ID:', applicantId);
    this.spinner.show();
  
    this.registerService.getApplicantById(applicantId).subscribe({
      next: (res: any) => {
        console.log('API Response:', res);
        if (res?.status === 'Valid') {
          this.selectedApplicant = res.data;
        }
        this.spinner.hide();
      },
      error: (err) => {
        console.error('API Error:', err);
        this.spinner.hide();
      }
    });
  }
  
  
  
  // downloadBase64File(base64: string, filename: string, filetype: string = 'application/octet-stream') {
  //   const linkSource = `data:${filetype};base64,${base64}`;
  //   const downloadLink = document.createElement("a");
  //   downloadLink.href = linkSource;
  //   downloadLink.download = filename;
  //   downloadLink.click();
  // }
  
  downloadBase64Fileold(base64: string, filename: string) {
    if (!base64 || base64.length < 50) {
      alert("No file data found.");
      return;
    }
  
    const mimeType = this.detectMimeType(base64);
    const extension = this.getFileExtensionFromMime(mimeType);
    const fullFileName = `${filename}.${extension}`;
    const linkSource = `data:${mimeType};base64,${base64}`;
    
    const downloadLink = document.createElement("a");
    downloadLink.href = linkSource;
    downloadLink.download = fullFileName;
    downloadLink.click();
  }
  
  getMimeTypeByFilename(filename: string): string {
    if (filename.endsWith('.pdf')) return 'application/pdf';
    if (filename.endsWith('.jpg') || filename.endsWith('.jpeg')) return 'image/jpeg';
    if (filename.endsWith('.png')) return 'image/png';
    return 'application/octet-stream';
  }

  getExtensionFromMimeType(mimeType: string): string {
    switch (mimeType) {
      case 'application/pdf': return 'pdf';
      case 'image/jpeg': return 'jpg';
      case 'image/png': return 'png';
      default: return 'bin';
    }
  }

  downloadBase64File(base64: string, filenameWithoutExt: string): void {
    if (!base64 || base64.length < 30) {
      Swal.fire('Error', 'No file data found.', 'error');
      return;
    }
  
    // Clean up PostgreSQL style base64 (if \x present)
    const cleanBase64 = base64.replace(/^\\x/, '').replace(/\\x/g, '').trim();
  
    // Force PDF MIME for certificates/resume, use .pdf extension
    const mimeType = 'application/pdf';
    const extension = 'pdf';
  
    // Decode Base64 to binary
    const byteCharacters = atob(cleanBase64);
    const byteArrays = new Uint8Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteArrays[i] = byteCharacters.charCodeAt(i);
    }
  
    const blob = new Blob([byteArrays], { type: mimeType });
    const blobUrl = URL.createObjectURL(blob);
  
    const downloadLink = document.createElement('a');
    downloadLink.href = blobUrl;
    downloadLink.download = `${filenameWithoutExt}.${extension}`;
    downloadLink.click();
  
    URL.revokeObjectURL(blobUrl);
  }
  
  fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload = () => {
        try {
          const binary = reader.result as string;
          const base64 = btoa(binary);
          resolve(base64);
        } catch (e) {
          reject(e);
        }
      };
      reader.onerror = error => reject(error);
    });
  }
  
  
  detectMimeType(base64: string): string {
    const first = base64.slice(0, 10);
    if (first.startsWith('JVBER')) return 'application/pdf';
    if (first.startsWith('/9j/')) return 'image/jpeg';
    if (first.startsWith('iVBOR')) return 'image/png';
    return 'application/octet-stream';
  }
  
  


  detectMimeTypeold(base64: string): string {
    if (base64.startsWith('/9j/')) return 'image/jpeg';
    if (base64.startsWith('iVBOR')) return 'image/png';
    if (base64.startsWith('JVBER')) return 'application/pdf';
    if (base64.startsWith('R0lGOD')) return 'image/gif';
    return 'application/octet-stream'; // fallback
  }
  

  getFileExtensionFromMime(mime: string): string {
    switch (mime) {
      case 'image/jpeg': return 'jpg'; // or return 'jpeg' if you prefer
      case 'image/png': return 'png';
      case 'image/gif': return 'gif';
      case 'application/pdf': return 'pdf';
      case 'application/zip': return 'zip';
      default: return 'bin';
    }
  }
  

  getFileExtensionFromMimeold(mime: string): string {
    switch (mime) {
      case 'image/jpeg': return 'jpg';
      case 'image/png': return 'png';
      case 'image/gif': return 'gif';
      case 'application/pdf': return 'pdf';
      default: return 'bin';
  }
  }
  
  
  isImage(base64: string): boolean {
    const mime = this.detectMimeType(base64);
    return mime?.startsWith('image/') ?? false;
  }
  
}

