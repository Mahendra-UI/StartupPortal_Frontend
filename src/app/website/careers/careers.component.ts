import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

postsList : any[] = [];

  constructor(private router: Router, private registerService: RegisterService) { }

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
    this.registerService.getAllCareerPosts().subscribe({
      next: (res: any) => {
        if (res.status === 'Valid') {
          this.postsList = res.data;
          // this.postsList = res.data.filter(( post: any ) => post.IsActive === true );
          console.log(this.postsList, "postsList");
          
        }
      },
      error: () => {
        Swal.fire('Error', 'Failed to load posts', 'error');
      }
    });
  }

  hexToBase64(hex: string): string {
    const cleanHex = hex.replace(/\\x/g, ''); // remove \x
    const bytes = new Uint8Array(cleanHex.match(/.{1,2}/g)!.map(byte => parseInt(byte, 16)));
    let binary = '';
    bytes.forEach(b => binary += String.fromCharCode(b));
    return btoa(binary); // encode to base64
  }
  
  
  downloadCvFile(applicantId: number) {
    this.registerService.getApplicantDetailsById(applicantId).subscribe({
      next: (res: any) => {
        const hex = res.data[0].cvfile;
        const base64 = this.hexToBase64(hex);
        const fileName = `${res.data[0].applicantname}_Resume.pdf`;
        this.downloadBase64File(base64, fileName);
      },
      error: () => {
        Swal.fire('Error', 'Failed to fetch applicant details', 'error');
      }
    });
  }
  
  downloadBase64File(base64: string, fileName: string) {
    const byteCharacters = atob(base64);
    const byteNumbers = Array.from(byteCharacters).map(c => c.charCodeAt(0));
    const byteArray = new Uint8Array(byteNumbers);
  
    // 👉 Detect MIME type by inspecting first few bytes
    let mimeType = 'application/octet-stream';
    if (base64.startsWith('/9j')) mimeType = 'image/jpeg';
    else if (base64.startsWith('iVBOR')) mimeType = 'image/png';
    else if (base64.startsWith('JVBER')) mimeType = 'application/pdf';
  
    const extensionMap: any = {
      'application/pdf': 'pdf',
      'image/jpeg': 'jpg',
      'image/png': 'png'
    };
  
    const blob = new Blob([byteArray], { type: mimeType });
  
    const extension = extensionMap[mimeType] || 'file';
    const finalFileName = fileName.endsWith(`.${extension}`) ? fileName : `${fileName}.${extension}`;
  
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = finalFileName;
    link.click();
    URL.revokeObjectURL(link.href);
  }
    

}
