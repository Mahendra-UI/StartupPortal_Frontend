import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
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
  todayDate: any;
  notificationFile: File | null = null;
  notificationBase64FromEdit: string | null = null;

  

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.todayDate = new Date();
    this.fetchAllPosts();
  }

  initializeForm() {
    this.postForm = this.fb.group({
      positionName: ['', Validators.required],
      vacanciesCount: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      location: ['', Validators.required],
      experience: ['', Validators.required],
      lastDateOfSubmission: ['', [Validators.required, this.validateTodayOrFutureDate]],
      status: ['', Validators.required],
      notification: [null, Validators.required]
    });    
  }

  validateTodayOrFutureDate(control: any) {
    if (!control.value) return null;
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);
    return selectedDate >= today ? null : { pastDate: true };
  }

  preventNonNumericInput(event: KeyboardEvent) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  dateManualEntryRestrict(event: any) {
    return false;
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
  
  async onSubmit() {
    this.submitted = true;
  
    if (this.postForm.invalid) return;
  
    this.spinner.show();
  
    try {
      let base64Notification: string | null = null;
  
      if (this.notificationFile) {
        base64Notification = await this.fileToBase64(this.notificationFile);
      } else if (this.notificationBase64FromEdit) {
        base64Notification = this.notificationBase64FromEdit;
      }
  
      if (!base64Notification) {
        this.spinner.hide();
        Swal.fire('Error', 'Notification file is missing.', 'error');
        return;
      }
  
      const formValues = this.postForm.value;
  
      const postData: any = {
        positionName: formValues.positionName,
        vacanciesCount: parseInt(formValues.vacanciesCount),
        location: formValues.location,
        experience: formValues.experience,
        notification: base64Notification,
        lastDateOfSubmission: new Date(formValues.lastDateOfSubmission).toISOString(),
        isActive: formValues.status === 'Active'
      };
  
      if (this.selectedPostId !== null) {
        postData.positionId = this.selectedPostId;
  
        this.registerService.updatePost(postData).subscribe({
          next: (res: any) => {
            this.spinner.hide();
            if (res?.status === 'Valid' && res.data[0]?.status === 'Success') {
              Swal.fire('Updated', 'Post updated successfully!', 'success');
              this.resetForm();
              this.fetchAllPosts();
            } else {
              Swal.fire('Failed', 'Update failed. Please retry.', 'warning');
            }
          },
          error: () => {
            this.spinner.hide();
            Swal.fire('Error', 'Update failed due to server error.', 'error');
          }
        });
      } else {
        this.registerService.addNewPost(postData).subscribe({
          next: (res: any) => {
            this.spinner.hide();
            if (res?.status === 'Valid' && res.data[0]?.status === 'Success') {
              Swal.fire('Success', 'Post added successfully!', 'success');
              this.resetForm();
              this.fetchAllPosts();
            } else {
              Swal.fire('Failed', 'Post not added. Check data.', 'warning');
            }
          },
          error: () => {
            this.spinner.hide();
            Swal.fire('Error', 'Addition failed due to server error.', 'error');
          }
        });
      }
    } catch (error) {
      this.spinner.hide();
      Swal.fire('Error', 'An error occurred while processing the request.', 'error');
    }
  }
  
  
  


  fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve((reader.result as string).split(',')[1]);
      reader.onerror = error => reject(error);
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    const fileName = file?.name || '';
  
    if (!file) return;
  
    // Check file type (only allow PDF)
    const allowedType = 'application/pdf';
    if (file.type !== allowedType) {
      this.toastr.error('Only PDF files are allowed');
      Swal.fire('Invalid File', 'Only PDF files are allowed.', 'error');
      this.clearNotificationFile();
      return;
    }
  
    // Check file size (max 2MB)
    const maxSizeMB = 2;
    if (file.size > maxSizeMB * 1024 * 1024) {
      this.toastr.error('File exceeds maximum size of 2MB');
      Swal.fire('File Too Large', 'Notification file must be under 2MB.', 'warning');
      this.clearNotificationFile();
      return;
    }
  
    // Check for special characters in filename (allow only alphanumerics, underscores, hyphens, dots)
    const validNameRegex = /^[a-zA-Z0-9_\-\.]+$/;
    if (!validNameRegex.test(file.name)) {
      this.toastr.error('Filename contains invalid characters');
      Swal.fire('Invalid Filename', 'Filename must not contain special characters.', 'info');
      this.clearNotificationFile();
      return;
    }
  
    // All validations passed
    this.notificationFile = file;
    this.postForm.get('notification')?.setValue(file.name);
  }
  clearNotificationFile() {
    this.notificationFile = null;
    this.postForm.get('notification')?.reset();
  }
  

  onEditPost(id: number) {
    this.spinner.show();
  
    this.registerService.getCareerPostById(id).subscribe({
      next: (res: any) => {
        this.spinner.hide();
        if (res.status === 'Valid' && res.data.length > 0) {
          const post = res.data[0];
          this.selectedPostId = post.PositionId;
          this.notificationBase64FromEdit = post.Notification;
  
          this.postForm.patchValue({
            positionName: post.PositionName,
            vacanciesCount: post.VacanciesCount,
            location: post.Location,
            experience: post.Experience,
            lastDateOfSubmission: post.LastDateOfSubmission?.split('T')[0],
            status: post.IsActive ? 'Active' : 'Inactive',
            notification: 'Existing Notification.pdf'
          });
  
          this.notificationFile = null;
        } else {
          Swal.fire('No Data', 'Post not found.', 'warning');
        }
      },
      error: () => {
        this.spinner.hide();
        Swal.fire('Error', 'Could not load post details.', 'error');
      }
    });
  }
  
  

  resetForm() {
    this.postForm.reset();
    this.submitted = false;
    this.selectedPostId = null;
    this.notificationFile = null;
    this.notificationBase64FromEdit = null;
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
        Swal.fire('Error', 'Unable to fetch post details', 'error');
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
