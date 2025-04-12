// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-websiteadmincareers',
//   templateUrl: './websiteadmincareers.component.html',
//   styleUrls: ['./websiteadmincareers.component.css']
// })
// export class WebsiteadmincareersComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }




import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/website/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-websiteadmincareers',
  templateUrl: './websiteadmincareers.component.html',
  styleUrls: ['./websiteadmincareers.component.css']
})
export class WebsiteadmincareersComponent implements OnInit {
  postForm: FormGroup;
  submitted = false;
  postsList: any[] = [];
  isLoading = false;


  selectedPostId: number | null = null;

  todayDate: any



  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.todayDate = new Date()
    // this.formatDate(this.todayDate)
    // this.todayDate = this.utils.formatDate(this.todayDate)
    this.fetchAllPosts();
  }

  initializeForm() {
    this.postForm = this.fb.group({
      positionName: ['', Validators.required],
      vacanciesCount: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      location: ['', Validators.required],
      experience: ['', Validators.required],
      // lastDateOfSubmission: ['', Validators.required],
      lastDateOfSubmission: ['', [Validators.required, this.validateTodayOrFutureDate]],
      status: ['', Validators.required],
      notification: ['', Validators.required]
    });    
  }

  preventNonNumericInput(event: KeyboardEvent) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  
  dateManualEntryRestrict(event: any) {
    return false
  }
  
  validateTodayOrFutureDate(control: any) {
    if (!control.value) return null;
  
    const selectedDate = new Date(control.value);
    const today = new Date();
  
    // Reset time for comparison
    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);
  
    return selectedDate >= today ? null : { pastDate: true };
  }
  


  fetchAllPosts() {
    this.registerService.getAllCareerPosts().subscribe({
      next: (res: any) => {
        if (res.status === 'Valid') {
          this.postsList = res.data;
          console.log(this.postsList, "postsList");
          
        }
      },
      error: () => {
        Swal.fire('Error', 'Failed to load posts', 'error');
      }
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.postForm.invalid) return;

    const formValues = this.postForm.value;

    const postData = {
      positionId: this.selectedPostId ?? 0, // If editing, send ID; else 0
      positionName: formValues.positionName,
      vacanciesCount: parseInt(formValues.vacanciesCount),
      location: formValues.location,
      experience: formValues.experience,
      notification: formValues.notification,
      lastDateOfSubmission: new Date(formValues.lastDateOfSubmission).toISOString(),
      isActive: formValues.status === 'Active'
    };
    
        this.registerService.addNewPost(postData).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        if (res?.status === 'Valid' && res.data[0]?.status === 'Success') {
          Swal.fire('Success', 'Job post added successfully!', 'success');
          this.postForm.reset();
          this.submitted = false;
          this.fetchAllPosts();
        } else {
          Swal.fire('Failed', 'Post not added. Maybe the Position ID already exists.', 'warning');
        }
      },
      error: () => {
        this.isLoading = false;
        Swal.fire('Error', 'Something went wrong while adding the post.', 'error');
      }
    });
    
  }

  resetForm() {
    this.postForm.reset();
    this.submitted = false;
    this.selectedPostId = null;
    this.selectedPostDetails = null;
  }
  
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.postForm.patchValue({
        notification: file.name  // store only the file name
      });
    }
  }
  
  
  onEditPost(id: number) {
    console.log("Requested Edit for ID:", id);
  
    this.registerService.getCareerPostById(id).subscribe({
      next: (res: any) => {
        console.log("API Response:", res);
  
        if (res.status === 'Valid' && res.data.length > 0) {
          const post = res.data[0];
          console.log("Post to patch:", post);
  
          this.selectedPostId = post.PositionId;
  
          this.postForm.patchValue({
            positionName: post.PositionName,
            vacanciesCount: post.VacanciesCount,
            location: post.Location,
            experience: post.Experience,
            notification: post.Notification,
            lastDateOfSubmission: post.LastDateOfSubmission?.split('T')[0],
            status: post.IsActive ? 'Active' : 'Inactive'
          });
        } else {
          Swal.fire('No Data', 'Post not found.', 'warning');
        }
      },
      error: (err) => {
        console.error("API Error:", err);
        Swal.fire('Error', 'Could not load post details.', 'error');
      }
    });
  }
  
  selectedPostDetails: any = null;

  onViewPost(id: number) {
    this.registerService.getCareerPostById(id).subscribe({
      next: (res: any) => {
        if (res.status === 'Valid' && res.data.length > 0) {
          this.selectedPostDetails = res.data[0];
        } else {
          Swal.fire('Info', 'No post data found.', 'info');
        }
      },
      error: (err) => {
        console.error('View Fetch Error:', err);
        Swal.fire('Error', 'Unable to fetch post details', 'error');
      }
    });
  }
  


}
