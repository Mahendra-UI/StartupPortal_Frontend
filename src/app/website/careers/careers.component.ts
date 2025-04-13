import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

postsList : any[] = [];

  constructor(private router: Router, private registerService: RegisterService, private spinner: NgxSpinnerService) { }

careersList = [
  {
    career_id: 1,
    position: 'Software Engineer 1',
    no_of_vacancies: 2,
    location: 'Remote',
    experience: '2-3 years',
    salary: 'INR 5,00,000 - 7,00,000',
    notication_pdf: 'https://example.com/notification1.pdf',
    status : "Active"
  },
  {
    career_id: 2,
    position: 'Software Engineer 2',
    no_of_vacancies: 2,
    location: 'Remote',
    experience: '2-3 years',
    salary: 'INR 5,00,000 - 7,00,000',
    notication_pdf: 'https://example.com/notification2.pdf',
    status : "Inactive"
  },
  {
    career_id: 3,
    position: 'Software Engineer',
    no_of_vacancies: 3,
    location: 'Vijayawada',
    experience: '2-3 years',
    salary: 'INR 5,00,000 - 7,00,000',
    notication_pdf: 'https://example.com/notification3.pdf',
    status : "Active"
  }
]


  ngOnInit(): void {
    this.fetchAllPosts();   
  }

  ViewDetails(career_id: number) {
    sessionStorage.setItem('selected_career_id', career_id.toString());
    console.log(career_id, "career_id");
    console.log(sessionStorage.getItem('selected_career_id'), "sessionStorage");
    // Navigate to the career details page
    this.router.navigate(['/careerdetails']);
  } 


  fetchAllPosts() {
    this.spinner.show();
    this.registerService.getAllCareerPosts().subscribe({
      next: (res: any) => {
        if (res.status === 'Valid') {
          this.postsList = res.data;
        }
        this.spinner.hide();
      },
      error: () => {
        this.spinner.hide();
        // Swal.fire('Error', 'Failed to load posts', 'error');
      }
    });
  }

  downloadNotification(base64: string, filename: string): void {
    if (!base64 || base64.length < 30) {
      Swal.fire('No File', 'No notification data found.', 'info');
      return;
    }
  
    // Detect MIME type from base64
    let mimeType = this.detectMimeType(base64);
  
    // Fallback to PDF if filename ends with .pdf
    if (filename.toLowerCase().endsWith('.pdf')) {
      mimeType = 'application/pdf';
    }
  
    const extension = this.getFileExtensionFromMime(mimeType);
    const fullFileName = `${filename}.${extension}`;
    const linkSource = `data:${mimeType};base64,${base64}`;
  
    const downloadLink = document.createElement('a');
    downloadLink.href = linkSource;
    downloadLink.download = fullFileName;
    downloadLink.click();
  }
  
  
  detectMimeType(base64: string): string {
    if (!base64) return 'application/octet-stream';
  
    const firstChars = base64.substring(0, 10);
  
    if (firstChars.startsWith('/9j/')) return 'image/jpeg';
    if (firstChars.startsWith('iVBOR')) return 'image/png';
    if (firstChars.startsWith('JVBER')) return 'application/pdf'; // PDF
    if (firstChars.startsWith('R0lGOD')) return 'image/gif';
  
    return 'application/pdf'; // Fallback to PDF by default if uncertain
  }
  
  
  getFileExtensionFromMime(mime: string): string {
    switch (mime) {
      case 'image/jpeg': return 'jpg';
      case 'image/png': return 'png';
      case 'application/pdf': return 'pdf';
      default: return 'pdf'; // default fallback is now pdf
    }
  }
  

}
