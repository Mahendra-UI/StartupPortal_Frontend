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

}
