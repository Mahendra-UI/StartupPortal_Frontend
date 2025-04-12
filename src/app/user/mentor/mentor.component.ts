import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/website/register.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import Swal from 'sweetalert2';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css'],
})
export class MentorComponent implements OnInit {
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  // mentorForm: any;
  mentorForm: FormGroup;
  existingIDCardDiv: boolean = false;
  startupDetails: any;
  submitted = false;
  todayDate: any;
  date: any;
  actionBtnService: any = 'Submit';
  specliaationList: any = [];
  functionList: any = [];
  specializationSettings: IDropdownSettings = {
    singleSelection: false,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 5,
    limitSelection:3,
    allowSearchFilter: true,
    idField: 'specialization_id',
    textField: 'specialization_name',
    noDataAvailablePlaceholderText: 'No items found',
  };
  functionSettings: IDropdownSettings = {
    singleSelection: false,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 5,
    limitSelection:10,
    allowSearchFilter: true,
    idField: 'function_id',
    textField: 'function_name',
    noDataAvailablePlaceholderText: 'No items found',
  };
  industrySettings: IDropdownSettings = {
    singleSelection: false,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 5,
    limitSelection:5,
    allowSearchFilter: true,
    idField: 'industry_id',
    textField: 'industry_name',
    noDataAvailablePlaceholderText: 'No items found',
  };
  specialIdList: any = [];
  sectorIdList: any = [];
  functionIdList: any = [];
  stagesList: any = [];
  industSectorsList: any = [];
  loginData: any = [];
  stateList: any = [];
  bindRowData: any = [];
  selectedSector: any = [];
  selectedSpecization: any = [];
  selectedFunction: any = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private regService: RegisterService,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.loginData = JSON.parse(sessionStorage.getItem('USER_DATA'));
    this.getStages();
    this.date = new Date().toISOString().slice(0, 10);
    this.getSpecialization();
    this.getIndustriesSectors();
    this.getFunctionList();
    this.getStatesList();
    this.mentorForm = this.fb.group({
      // fullName: ['', [Validators.required]],
      fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      gender: ['', [Validators.required]],
      mobileNo: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      emailName: [
        '',
        [Validators.required, Validators.pattern(this.emailPattern)],
      ],
      stateName: ['', [Validators.required]],
      stages: ['', [Validators.required]],
      cityName: ['', [Validators.required]],
      mentorOrgName: ['', [Validators.required,Validators.pattern(/^[0-9a-zA-Z\s/]*$/)]],
      designationName: ['', [Validators.required, Validators.pattern(/^[0-9a-zA-Z\s/]*$/)]],
      hours: ['', [Validators.required]],
      mentorSector: ['', [Validators.required]],
      mentorSpecilization: ['', [Validators.required]],
      inductryKeywords: ['', [Validators.required]],
      linkedInUrl: ['', [Validators.required]],
      personalWebsiteUrl: ['', [Validators.required]],
      profilePicture: [''],
      resumeFile: ['', [Validators.required]],
      shortDescription: [''],
    });
    if (this.loginData?.application_status != 'Not submitted') {
      this.getEditDataById();
    }
  }

  numberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  dateManualEntryRestrict(event: any) {
    return false;
  }
  get mentorFormControls() {
    return this.mentorForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (!this.mentorForm.valid) return;

    let mentorModalObject = {
      name: this.mentorForm.value.fullName,
      profile_picture: this.mentorForm.value.profilePicture,
      current_organization_name: this.mentorForm.value.mentorOrgName,
      current_designation: this.mentorForm.value.designationName,
      email: this.mentorForm.value.emailName,
      phone: this.mentorForm.value.mobileNo,
      gender: this.mentorForm.value.gender,
      country_id: 'string',
      mentorship_hours_perweek: this.mentorForm.value.hours,
      industry_id: this.sectorIdList.join(),
      specialization_id: this.specialIdList.join(),
      function_id: this.functionIdList.join(),
      stage_id: this.mentorForm.value.stages,
      linked_in_profile_url: this.mentorForm.value.linkedInUrl,
      resume_path: this.mentorForm.value.resumeFile,
      personal_url: this.mentorForm.value.personalWebsiteUrl,
      description: this.mentorForm.value.shortDescription,
      state_id: this.mentorForm.value.stateName,
      city: this.mentorForm.value.cityName,
    };
    let id = this.loginData?.application_status == 'reviewed' ? 3 : 2;
    this.regService
      .mentrorRegistration(
        mentorModalObject,
        id,
        Number(this.loginData?.login_id)
      )
      .subscribe((res) => {
        if (res['message'] == 'Success')
        {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Saved Successfully',
          }).then(() => {
           
          });
          sessionStorage.removeItem('USER_DATA');
          this.router.navigate(['/user/home']);
          this.mentorForm.reset();
        }
        // this.toastr.success('Saved successfully...', 'Success');
        else
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failure',
          });
        // this.toastr.error('Failed...', 'Faiuure')
      });
  }

  fileSizeValidate(event) {
    var file = 0;
    var fsize;
    fsize = event.size;
    file = Math.round(fsize / 1024);
    if (file > 2048) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'File too Big, please select a file less than 2mb',
      });
      return false;
    } else {
      return true;
    }
  }
  fileTypeCheck(event: any) {
    const validFileTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'application/pdf',
    ];
    var fileName = event.name
    var matched = [];
    let matches = fileName.match(/\./g);
    let isValid = matches != null && matches.length > 1 ? false : true;
    if(isValid === false){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please upload a valid file/Check for filename',
      });
      return false;
    }
    else{
      if(fileName.includes('%')){
        console.warn('if case')
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Please upload a valid file/Check for filename',
        });
        return false;
      }
    for (var i = 0; i <= validFileTypes.length; i++) {
      if (validFileTypes[i] == event.type) {
        matched.push(validFileTypes[i]);
      }
    }
    if (matched.length > 0) {
      return true;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please upload a valid file/Check for filename',
      });
      return false;
    }
  }
  }

  handleProfilePicUpload(event: any) {
    if (this.fileSizeValidate(event.target.files[0])) {
      if (this.fileTypeCheck(event.target.files[0])) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event: any) => {
          this.mentorForm.patchValue({
            profilePicture: reader.result,
          });
        };
      } else {
        event.target.value = '';
      }
    } else {
      event.target.value = '';
    }
  }

  handleResumeFileUpload(event: any) {
    if (this.fileSizeValidate(event.target.files[0])) {
      if (this.fileTypeCheck(event.target.files[0])) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event: any) => {
          this.mentorForm.patchValue({
            resumeFile: reader.result,
          });
        };
      } else {
        event.target.value = '';
      }
    } else {
      event.target.value = '';
    }
  }

  getSpecialization() {
    let req = {
      typeId: 7,
      typeParameter: 0,
    };

    this.regService.getStartUpData(req).subscribe((res: any) => {
      this.specliaationList = res['data'];
    });
  }
  getFunctionList() {
    let req = {
      typeId: 8,
      typeParameter: 0,
    };

    this.regService.getStartUpData(req).subscribe((res: any) => {
      this.functionList = res['data'];
    });
  }

  onSelectSector(event) {
    this.findSectorId(this.mentorForm.get('mentorSector').value);
  }
  onSelecttSectorAll(event) {
    this.sectorIdList = this.industSectorsList.map((e) => e?.industry_id);
  }
  onDeSelectSector(event) {
    this.findSectorId(this.mentorForm.get('mentorSector').value);
  }
  onDeSelecttAllSector(event) {
    this.sectorIdList = [];
  }

  onSelectSpecialization(event) {
    this.findSpeclizationId(this.mentorForm.get('mentorSpecilization').value);
  }
  onSelecttSpecializationAll(event) {
    this.specialIdList = this.specliaationList.map((e) => e?.specialization_id);
  }
  onDeSelectSpecialization(event) {
    this.findSpeclizationId(this.mentorForm.get('mentorSpecilization').value);
  }
  onDeSelecttSpecialization(event) {
    this.specialIdList = [];
  }

  findSpeclizationId(intrArr) {
    this.specialIdList = [];
    if (intrArr.length) {
      this.specialIdList = intrArr.map((e) => e?.specialization_id);
    }
  }

  findSectorId(intrArr) {
    this.sectorIdList = [];
    if (intrArr.length) {
      this.sectorIdList = intrArr.map((e) => e?.industry_id);
    }
  }

  getStages() {
    let req = {
      typeId: 1,
      typeParameter: 3,
    };

    this.regService.getStartUpData(req).subscribe((res: any) => {
      this.stagesList = res['data'];
    });
  }

  getIndustriesSectors() {
    let req = {
      typeId: 9,
      typeParameter: 0,
    };
    this.regService.getStartUpData(req).subscribe((res: any) => {
      this.industSectorsList = res['data'];
    });
  }

  onSelectFunction(event) {
    this.findFunctionId(this.mentorForm.get('inductryKeywords').value);
  }
  onSelecttFunctionAll(event) {
    this.functionIdList = this.functionList.map((e) => e?.function_id);
  }
  onDeSelectFunction(event) {
    this.findFunctionId(this.mentorForm.get('inductryKeywords').value);
  }
  onDeSelecttFunction(event) {
    this.functionIdList = [];
  }

  findFunctionId(intrArr) {
    this.functionIdList = [];
    if (intrArr.length) {
      this.functionIdList = intrArr.map((e) => e?.function_id);
    }
  }
  getStatesList() {
    let req = {
      typeId: 6,
      typeParameter: 0,
    };

    this.regService.getStartUpData(req).subscribe((res: any) => {
      this.stateList = res['data'];
    });
  }

  getEditDataById() {
    let req = {
      typeId: 3,
      loginType: this.loginData?.login_id,
    };
    this.adminService.getMentorDataById(req).subscribe((res) => {
      this.bindRowData = res['data'][0];
      this.bindSectors();
      this.bindSpecilization();
      this.bindFunction();
      this.bindEditData();
    });
  }
  bindEditData() {
    this.mentorForm.patchValue({
      fullName: this.bindRowData?.username,
      gender:
        this.bindRowData?.gender == 'Male'
          ? 1
          : this.bindRowData?.gender == 'Female'
          ? 2
          : 3,
      mobileNo: this.bindRowData?.phone_number,

      emailName: this.bindRowData?.email,
      stateName: this.bindRowData?.state_id,
      cityName: this.bindRowData?.city,

      mentorOrgName: this.bindRowData?.current_organization_name,
      designationName: this.bindRowData?.current_designation,
      stages: this.bindRowData?.stage_id,

      hours:
        this.bindRowData?.mentorship_hours_perweek == '5-7 hours'
          ? 1
          : this.bindRowData?.mentorship_hours_perweek == '7-10 hours'
          ? 2
          : 3,
      mentorSector: this.selectedSector,

      mentorSpecilization: this.selectedSpecization,
      linkedInUrl: this.bindRowData?.linkedin_profile_url,

      inductryKeywords: this.selectedFunction,
      personalWebsiteUrl: this.bindRowData?.personal_blog_url,

      shortDescription: this.bindRowData?.description,

      // profilePicture: this.bindRowData,
      // resumeFile: this.bindRowData
    });
  }

  bindSectors() {
    let idArr = this.bindRowData?.industry_id;
    idArr = idArr.split(',');
    this.selectedSector = this.filterSectorArray(this.industSectorsList, idArr);
  }

  filterSectorArray(mainArray, subArray) {
    let val = mainArray.filter((elem) => {
      return subArray.some((ele) => {
        return ele == elem.industry_id;
      });
    });
    return val;
  }

  bindSpecilization() {
    let idArr = this.bindRowData?.specialization_id;
    idArr = idArr.split(',');
    this.selectedSpecization = this.filterSpecilizationArray(
      this.specliaationList,
      idArr
    );
  }

  filterSpecilizationArray(mainArray, subArray) {
    let val = mainArray.filter((elem) => {
      return subArray.some((ele) => {
        return ele == elem.specialization_id;
      });
    });
    return val;
  }

  bindFunction() {
    let idArr = this.bindRowData?.function_id;
    idArr = idArr.split(',');
    this.selectedFunction = this.filterFunctionArray(this.functionList, idArr);
  }

  filterFunctionArray(mainArray, subArray) {
    let val = mainArray.filter((elem) => {
      return subArray.some((ele) => {
        return ele == elem.function_id;
      });
    });
    return val;
  }

  editResumeLogo()
  {
    this.bindRowData.resume_path = '';
  
    this.mentorForm.patchValue({
      resumeFile: '',
    });
  }

  editProfilePicture()
  {
    this.bindRowData.profile_picture = '';
  
    this.mentorForm.patchValue({
      profilePicture: '',
    });
  }
}
