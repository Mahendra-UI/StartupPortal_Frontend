import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/website/register.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';





@Component({
  selector: 'app-websiteadmincareersapplications',
  templateUrl: './websiteadmincareersapplications.component.html',
  styleUrls: ['./websiteadmincareersapplications.component.css']
})
export class WebsiteadmincareersapplicationsComponent implements OnInit {

  actionForm! : FormGroup
  isLoading = false; // Loader flag

  searchTerm = '';
  // p: number = 1; 
  filteredApplicants: any[] = [];
  itemsPerPage = 10;
  currentPage = 1;
 
  applicantsList: any[] = [];
  selectedApplicant: any = null;

  selectedApplicantId: number | null = null;


  constructor(private toastr: ToastrService,  private registerService: RegisterService, private fb: FormBuilder, private spinner: NgxSpinnerService) {}

//   readonly EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
// readonly EXCEL_EXTENSION = '.xlsx';

EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
EXCEL_EXTENSION = '.xlsx';


  ngOnInit(): void {
    this.getAllApplicants();
    this.actionForm = this.fb.group({
      status: ['', Validators.required],
      remarks: ['']
    });    
  }

  displayedRecordsCount(): number {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const remaining = this.filteredApplicants.length - startIndex;
    return Math.min(this.itemsPerPage, remaining);
  }
  
  onPageChange(page: number): void {
    this.currentPage = page;
  }
  onOpenActionModalold(applicantId: number) {
    this.selectedApplicantId = applicantId;
    this.actionForm.reset(); // optional: reset previous form data
  }

  onOpenActionModal(applicantId: number) {
    this.selectedApplicantId = applicantId;
    this.actionForm.reset(); // optional: reset previous form data
  }  
  

  submitActionold() {
    if (this.actionForm.invalid || this.selectedApplicantId === null) {
      return;
    }
  
    const applicant = this.applicantsList.find(app => app.applicantid === this.selectedApplicantId);
  
    if (!applicant) {
      this.toastr.error('Applicant not found.');
      return;
    }
  
    const updatedPayload = {
      ...applicant,
      status: this.actionForm.value.status,
      remarks: this.actionForm.value.remarks || ''
    };
  
    this.spinner.show();
    this.registerService.updateApplicantDetails(updatedPayload).subscribe({
      next: (res: any) => {
        this.spinner.hide();
        Swal.fire('Success', 'Status updated successfully.', 'success');
        this.getAllApplicants();
      },
      error: () => {
        this.spinner.hide();
        Swal.fire('Error', 'Failed to update status.', 'error');
      }
    });
  }

  submitAction() {
    if (this.actionForm.invalid || this.selectedApplicantId === null) {
      this.toastr.error('Please select a valid applicant and fill the form.');
      return;
    }
  
    this.spinner.show();
    this.registerService.getApplicantById(this.selectedApplicantId).subscribe({
      next: async (res: any) => {
        this.spinner.hide();
        if (res?.status === 'Valid') {
          const applicant = res.data;
  
          const updatedPayload = {
            ...applicant,
            status: this.actionForm.value.status,
            adminComments: this.actionForm.value.remarks || '',
            remarks: applicant.remarks || '', // Include required remarks
          };
  
          this.submitFullPayload(updatedPayload);
        } else {
          this.toastr.error('Failed to load applicant details.');
        }
      },
      error: (err) => {
        this.spinner.hide();
        this.toastr.error('Failed to fetch applicant details.');
        console.error('Fetch Error:', err);
      }
    });
  }
  
  submitFullPayload(payload: any) {
    this.spinner.show();
    this.registerService.updateApplicantDetails(payload).subscribe({
      next: () => {
        this.spinner.hide();
        Swal.fire('Success', 'Status updated successfully.', 'success');
        this.getAllApplicants();
      },
      error: (err) => {
        this.spinner.hide();
        Swal.fire('Error', 'Failed to update status.', 'error');
        console.error('Update Error:', err);
      }
    });
  }
  

  exportToExcelold(): void {
    const dataToExport = this.filteredApplicants.length > 0 ? this.filteredApplicants : this.applicantsList;
  
    // Flatten Education and Work Experience into separate columns
    const exportData = dataToExport.map(applicant => {
      // Prepare dynamic columns for education
      const educationEntries = applicant.educationdetails || [];
      const educationCols: any = {};
      educationEntries.forEach((edu: any, index: number) => {
        educationCols[`Education ${index + 1} - Qualification`] = edu.qualification;
        educationCols[`Education ${index + 1} - Institute`] = edu.institute;
        educationCols[`Education ${index + 1} - Board`] = edu.board;
        educationCols[`Education ${index + 1} - Year`] = edu.yearofpassing;
        educationCols[`Education ${index + 1} - Aggregate`] = edu.totalaggregate;
      });
  
      // Prepare dynamic columns for work experience
      const workEntries = applicant.workexperience || [];
      const workCols: any = {};
      workEntries.forEach((work: any, index: number) => {
        workCols[`Work ${index + 1} - Designation`] = work.designation;
        workCols[`Work ${index + 1} - Company`] = work.companyname;
        workCols[`Work ${index + 1} - From`] = new Date(work.fromdate).toLocaleDateString();
        workCols[`Work ${index + 1} - To`] = new Date(work.todate).toLocaleDateString();
      });
  
      return {
        'Full Name': applicant.applicantname,
        'Mobile Number': applicant.mobilenumber,
        'Email ID': applicant.emailid,
        'Applied For': applicant.applypost,
        'Submitted On': new Date(applicant.submittedon).toLocaleDateString(),
        'Status': applicant.status,
        'Date of Birth': new Date(applicant.dateofbirth).toLocaleDateString(),
        'Address': applicant.communicationaddress,
        'Remarks': applicant.remarks,
        ...educationCols,
        ...workCols
      };
    });
  
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exportData);
    const workbook: XLSX.WorkBook = { Sheets: { 'Applicants': worksheet }, SheetNames: ['Applicants'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], { type: this.EXCEL_TYPE });
    FileSaver.saveAs(data, 'ApplicantsData_' + new Date().getTime() + this.EXCEL_EXTENSION);
  }
  


  exportToExcelnew(): void {
    const dataToExport = this.filteredApplicants.length > 0 ? this.filteredApplicants : this.applicantsList;
  
    const exportData = dataToExport.map(applicant => ({
      'Full Name': applicant.applicantname,
      'Mobile Number': applicant.mobilenumber,
      'Email ID': applicant.emailid,
      'Applied For': applicant.applypost,
      'Submitted On': new Date(applicant.submittedon).toLocaleDateString(),
      'Status': applicant.status,
      'Date of Birth': new Date(applicant.dateofbirth).toLocaleDateString(),
      'Address': applicant.communicationaddress,
      'Remarks': applicant.remarks,
      'Education': applicant.educationdetails.map(edu =>
        `${edu.qualification} - ${edu.institute} (${edu.board}), Year: ${edu.yearofpassing}, Aggregate: ${edu.totalaggregate}`
      ).join('; '),
      'Work Experience': applicant.workexperience.map(work =>
        `${work.designation} at ${work.companyname} (${new Date(work.fromdate).toLocaleDateString()} - ${new Date(work.todate).toLocaleDateString()})`
      ).join('; ')
    }));
  
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exportData);
    const workbook: XLSX.WorkBook = { Sheets: { 'Applicants': worksheet }, SheetNames: ['Applicants'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], { type: this.EXCEL_TYPE });
    FileSaver.saveAs(data, 'ApplicantsData_' + new Date().getTime() + this.EXCEL_EXTENSION);
  }

  exportToExcel(): void {
    const dataToExport = this.filteredApplicants.length > 0 ? this.filteredApplicants : this.applicantsList;
  
    const exportData = dataToExport.map(applicant => {
      // Extract education details based on qualification type
      const educationMap: any = {
        Graduation: '',
        Intermediate: '',
        'Class X': ''
      };
  
      (applicant.educationdetails || []).forEach((edu: any) => {
        const qualification = edu.qualification.toLowerCase();
  
        if (qualification.includes('graduation')) {
          educationMap.Graduation = `${edu.institute} (${edu.board}), Year: ${edu.yearofpassing}, Aggregate: ${edu.totalaggregate}`;
        } else if (qualification.includes('intermediate') || qualification.includes('xii') || qualification.includes('12')) {
          educationMap.Intermediate = `${edu.institute} (${edu.board}), Year: ${edu.yearofpassing}, Aggregate: ${edu.totalaggregate}`;
        } else if (qualification.includes('x') || qualification.includes('10')) {
          educationMap['Class X'] = `${edu.institute} (${edu.board}), Year: ${edu.yearofpassing}, Aggregate: ${edu.totalaggregate}`;
        }
      });
  
      return {
        'Full Name': applicant.applicantname,
        'Mobile Number': applicant.mobilenumber,
        'Email ID': applicant.emailid,
        'Applied For': applicant.applypost,
        'Submitted On': new Date(applicant.submittedon).toLocaleDateString(),
        'Status': applicant.status,
        'Date of Birth': new Date(applicant.dateofbirth).toLocaleDateString(),
        'Address': applicant.communicationaddress,
        'Remarks': applicant.remarks,
        'Graduation': educationMap.Graduation,
        'Intermediate': educationMap.Intermediate,
        'Class X': educationMap['Class X'],
        'Work Experience': (applicant.workexperience || []).map(work =>
          `${work.designation} at ${work.companyname} (${new Date(work.fromdate).toLocaleDateString()} - ${new Date(work.todate).toLocaleDateString()})`
        ).join('; ')
      };
    });
  
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exportData);
    const workbook: XLSX.WorkBook = { Sheets: { 'Applicants': worksheet }, SheetNames: ['Applicants'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], { type: this.EXCEL_TYPE });
    FileSaver.saveAs(data, 'ApplicantsData_' + new Date().getTime() + this.EXCEL_EXTENSION);
  }
  
  

    
  
  
  getAllApplicants() {
    this.spinner.show();
    this.registerService.getApplicants().subscribe({
      next: (res: any) => {
        if (res?.status === 'Valid') {
          this.applicantsList = res.data;
          this.filterApplicants(); // Apply filter on load
        }
        this.spinner.hide();
      },
      error: (err) => {
        console.error('Error fetching applicants:', err);
        this.spinner.hide();
      }
    });
  }


  filterApplicants(): void {
    const term = this.searchTerm.trim().toLowerCase();
  
    this.filteredApplicants = this.applicantsList.filter(applicant =>
      Object.values(applicant).some(val =>
        val?.toString().toLowerCase().includes(term)
      )
    );
  
    this.currentPage = 1; // reset to first page after filtering
  }
  

  viewApplicant(applicantId: number) {
    console.log('Calling API with ID:', applicantId);
    this.spinner.show();
  
    this.registerService.getApplicantById(applicantId).subscribe({
      next: (res: any) => {
        console.log('API Response:', res);
        if (res?.status === 'Valid') {
          this.selectedApplicant = res.data;
          console.log('✅ selectedApplicant set:', this.selectedApplicant); // ADD THIS
        } else {
          console.warn('⚠️ API returned invalid status');
        }
        this.spinner.hide();
      },
      error: (err) => {
        console.error('API Error:', err);
        this.spinner.hide();
      }
    });
  }
  


  viewApplicantold(applicantId: number) {
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

  downloadBase64File(hexString: string, filenameWithoutExt: string): void {
    if (!hexString || hexString.length < 30) {
      Swal.fire('Error', 'No file data found.', 'error');
      return;
    }
  
    // Remove leading \\x if exists (PostgreSQL bytea format)
    const cleanHex = hexString.replace(/^\\x/, '').replace(/\\x/g, '').trim();
  
    // Convert hex string to byte array
    const byteArray = new Uint8Array(cleanHex.match(/.{1,2}/g)!.map(byte => parseInt(byte, 16)));
  
    // Guess MIME type based on magic numbers
    const mimeType = this.detectMimeFromBytes(byteArray);
    const extension = this.getFileExtensionFromMime(mimeType);
    const fullFileName = `${filenameWithoutExt}.${extension}`;
  
    // Create blob and trigger download
    const blob = new Blob([byteArray], { type: mimeType });
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement('a');
    a.href = url;
    a.download = fullFileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  detectMimeFromBytes(bytes: Uint8Array): string {
    if (bytes[0] === 0x25 && bytes[1] === 0x50 && bytes[2] === 0x44 && bytes[3] === 0x46) return 'application/pdf'; // %PDF
    if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4E && bytes[3] === 0x47) return 'image/png';        // PNG
    if (bytes[0] === 0xFF && bytes[1] === 0xD8) return 'image/jpeg';                                                  // JPEG
    return 'application/octet-stream';
  }
  
  
  downloadBase64Direct(base64Data: string, fileName: string, mimeType: string = 'application/pdf') {
    if (!base64Data || base64Data.length < 50) {
      Swal.fire('Error', 'Invalid or missing file data.', 'error');
      return;
    }
  
    const cleanBase64 = base64Data.replace(/^\\x/, '').replace(/\\x/g, '').trim();
  
    const byteCharacters = atob(cleanBase64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
  
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: mimeType });
    const blobUrl = URL.createObjectURL(blob);
  
    // Extension logic inline
    const extensionMap: any = {
      'application/pdf': 'pdf',
      'image/jpeg': 'jpg',
      'image/png': 'png',
    };
    const extension = extensionMap[mimeType] || 'bin';
  
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = `${fileName}.${extension}`;
    a.click();
    URL.revokeObjectURL(blobUrl);
  }
  

  // getExtensionFromMime(mime: string): string {
  //   switch (mime) {
  //     case 'application/pdf': return 'pdf';
  //     case 'image/jpeg': return 'jpg';
  //     case 'image/png': return 'png';
  //     default: return 'bin';
  //   }
  // }
  
  getExtensionFromMime(mime: string): string {
    switch (mime) {
      case 'application/pdf': return 'pdf';
      case 'image/jpeg': return 'jpg';
      case 'image/png': return 'png';
      default: return 'bin';
    }
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
    const signature = base64.slice(0, 10);
    if (signature.startsWith('JVBER')) return 'application/pdf';
    if (signature.startsWith('/9j/')) return 'image/jpeg';
    if (signature.startsWith('iVBOR')) return 'image/png';
    if (signature.startsWith('R0lG')) return 'image/gif';
    return 'application/octet-stream'; // fallback
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
      case 'application/pdf': return 'pdf';
      case 'image/jpeg': return 'jpg';
      case 'image/png': return 'png';
      case 'image/gif': return 'gif';
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

