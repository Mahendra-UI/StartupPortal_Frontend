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
import Swal from 'sweetalert2';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-incubator',
  templateUrl: './incubator.component.html',
  styleUrls: ['./incubator.component.css'],
})
export class IncubatorComponent implements OnInit {
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  // incubatorForm: any;
  incubatorForm: FormGroup;
  existingIDCardDiv: boolean = false;
  submitted = false;
  todayDate: any;
  date: any;
  actionBtnService: any = 'Submit';
  loginData: any;
  industryList: any = [];
  sectorsList: any = [];
  stateList: any = [];
  intrestList: any = [];
  stagesList: any = [];
  industryObject: any;
  sectorObj: any;
  bindRowData: any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private regService: RegisterService,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.loginData = JSON.parse(sessionStorage.getItem('USER_DATA'));

    this.getIndustries();
    this.getIntrestList();
    this.getStatesList();
    this.getStages();
    this.incubatorForm = this.fb.group({
      incubatorName: [
        '',
        [Validators.required],
      ],
      dateOfEstablishment: ['', [Validators.required]],
      currentIncubatees: [
        '',
        [Validators.required],
      ],
      gIncubateesCount: [''],
      isSuccStories: ['', [Validators.required]],
      brief: [
        '',
        [Validators.required],
      ],
      
      programmeDuration: ['', [Validators.required]],
      graduatedIncubatees: [
        '',
        [Validators.required],
      ],
      industryType: ['', [Validators.required]],
      industryOthers: [''],
      industrySubType: ['', [Validators.required]],
      industrySubTypeOthers: [''],
      interests: ['', [Validators.required]],
      empanelmentNumber: ['', [Validators.required]],
      applicationLink: [''],
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
      cityName: [''],
      stages: ['', [Validators.required]],
      incubationLocationMap: [
        '',
        [Validators.required],
      ],
      incubationLocationAddress: [
        '',
        [Validators.required],
      ],

      poiName: ['', [Validators.required,Validators.pattern(/^[0-9a-zA-Z\s/]*$/)]],
      poiEmailName: [
        '',
        [Validators.required, Validators.pattern(this.emailPattern)],
      ],
      roleName: ['', [Validators.required, Validators.pattern(/^[0-9a-zA-Z\s/]*$/)]],
      poiMobileNo: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      poiLandLineNo: ['', [Validators.required]],

      startupName: [''],
      startupAppLink: [''],
      incubatorIn: [''],
      startupIndiaProfileLink: [''],
      briefTagline: [''],

      entityLogo: ['', [Validators.required]],
      startupLogo: [''],

      termsConditions: ['', [Validators.required]],
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
  get incubatorFormControls() {
    return this.incubatorForm.controls;
  }

  onSubmit() {
    this.findInvalidControls();
    this.submitted = true;
    console.warn('this.incubatorForm', this.incubatorForm);
    console.log('valid', this.incubatorForm.valid);
    if (!this.incubatorForm.valid) return;

    let incubaterModelObject = {
      incubator_name: this.incubatorForm.value.incubatorName,
      logo: this.incubatorForm.value.entityLogo,
      logoo: this.incubatorForm.value.startupLogo,
      establishment_date: this.incubatorForm.value.dateOfEstablishment,
      current_incubates: this.incubatorForm.value.currentIncubatees,
      stage_id: this.incubatorForm.value.stages,
      brief: this.incubatorForm.value.brief,
      duration: this.incubatorForm.value.programmeDuration,
      graduated_incubates: this.incubatorForm.value.graduatedIncubatees,
      government_funded: 1,
      industry_id: this.incubatorForm.value.industryType,
      sector_id: this.incubatorForm.value.industrySubType,
      interest_id: this.incubatorForm.value.interests,
      dipp_implement_number: this.incubatorForm.value.empanelmentNumber,
      contact_email: this.incubatorForm.value.emailName,
      contact_mobile: this.incubatorForm.value.mobileNo,
      contact_state: this.incubatorForm.value.stateName,
      link: this.incubatorForm.value.applicationLink,
      location: this.incubatorForm.value.incubationLocationMap,
      location_address: this.incubatorForm.value.incubationLocationAddress,
      pointofcontact_name: this.incubatorForm.value.poiName,
      pointofcontact_email: this.incubatorForm.value.poiEmailName,
      pointofcontact_userrole: this.incubatorForm.value.roleName,
      pointofcontact_website: 'NA',
      pointofcontact_mobile_number: this.incubatorForm.value.poiMobileNo,
      pointofcontact_landline_number: this.incubatorForm.value.poiLandLineNo,
      pointofcontact_success_stories: this.incubatorForm.value.isSuccStories,
      startupname: this.incubatorForm.value.startupName,
      website: this.incubatorForm.value.startupAppLink,
      entered_the_incubator_in: this.incubatorForm.value.incubatorIn,
      startup_profilelink: this.incubatorForm.value.startupIndiaProfileLink,
      startup_brief: this.incubatorForm.value.briefTagline,
      graduated_incubatees_count: this.incubatorForm.value.gIncubateesCount,
      industry_others: this.incubatorForm.value.industryOthers,
      state_id:this.incubatorForm.value.stateName,
      sector_subtype_others: this.incubatorForm.value.industrySubTypeOthers,
    };

    let sendStarupObject = {
      typeId: this.loginData?.application_status == 'reviewed' ? 2 : 1,
      loginId: Number(this.loginData?.login_id),
      incubaterModel: incubaterModelObject,
    };

    console.log('send object***', sendStarupObject);

    this.regService
      .saveIncubatorRegistration(sendStarupObject)
      .subscribe((res) => {
        console.log('res***', res);
        if (res['message'] == 'Success')
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Saved Successfully',
          }).then(() => {
            sessionStorage.removeItem('USER_DATA');
            this.router.navigate(['/user/home']);
            this.incubatorForm.reset();
          });
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

  handleEntityLogoUpload(event: any) {
    if (this.fileSizeValidate(event.target.files[0])) {
      if (this.fileTypeCheck(event.target.files[0])) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event: any) => {
          this.incubatorForm.patchValue({
            entityLogo: reader.result,
          });
        };
      } else {
        event.target.value = '';
      }
    } else {
      event.target.value = '';
    }
  }

  handlestartupLogoUpload(event: any) {
    if (this.fileSizeValidate(event.target.files[0])) {
      if (this.fileTypeCheck(event.target.files[0])) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event: any) => {
          this.incubatorForm.patchValue({
            startupLogo: reader.result,
          });
        };
      } else {
        event.target.value = '';
      }
    } else {
      event.target.value = '';
    }
  }

  onChangeGradutedIncubat(value) {
    if (value == '1')
    {
      this.incubatorForm.get('gIncubateesCount').setValidators([Validators.required])
      this.incubatorForm.get('gIncubateesCount').setErrors({'required': true})
    }
    else 
    {
      this.incubatorForm.get('gIncubateesCount').clearValidators()
      this.incubatorForm.get('gIncubateesCount').setErrors(null)
    }

    this.incubatorForm.updateValueAndValidity();
  }
  onChangeSucce(value) {
    if (value == '1') {
      this.incubatorForm.get('startupLogo').setValidators([Validators.required])
      this.incubatorForm.get('startupLogo').setErrors({'required': true})
      this.incubatorForm.get('startupName').setValidators([Validators.required])
      this.incubatorForm.get('startupName').setErrors({'required': true})
      this.incubatorForm.get('startupAppLink').setValidators([Validators.required])
      this.incubatorForm.get('startupAppLink').setErrors({'required': true})
      this.incubatorForm.get('incubatorIn').setValidators([Validators.required])
      this.incubatorForm.get('incubatorIn').setErrors({'required': true})
      this.incubatorForm.get('startupIndiaProfileLink').setValidators([Validators.required])
      this.incubatorForm.get('startupIndiaProfileLink').setErrors({'required': true})

      this.incubatorForm.get('briefTagline').setValidators([Validators.required])
      this.incubatorForm.get('briefTagline').setErrors({'required': true})
      
    } else {
      this.incubatorForm.get('startupLogo').clearValidators()
      this.incubatorForm.get('startupLogo').setErrors(null)
      this.incubatorForm.get('startupName').clearValidators()
      this.incubatorForm.get('startupName').setErrors(null)
      this.incubatorForm.get('startupAppLink').clearValidators()
      this.incubatorForm.get('startupAppLink').setErrors(null)
      this.incubatorForm.get('incubatorIn').clearValidators()
      this.incubatorForm.get('incubatorIn').setErrors(null)
      this.incubatorForm.get('startupIndiaProfileLink').clearValidators()
      this.incubatorForm.get('startupIndiaProfileLink').setErrors(null)
      this.incubatorForm.get('briefTagline').clearValidators()
      this.incubatorForm.get('briefTagline').setErrors(null)
      
      this.incubatorForm.controls['startupName'].setValue('');
      this.incubatorForm.controls['startupAppLink'].setValue('');
      this.incubatorForm.controls['incubatorIn'].setValue('');
      this.incubatorForm.controls['startupIndiaProfileLink'].setValue('');
      this.incubatorForm.controls['briefTagline'].setValue('');
    
    }
    this.incubatorForm.updateValueAndValidity();
  }

  getIndustries() {
    let req = {
      typeId: 9,
      typeParameter: 0,
    };

    this.regService.getStartUpData(req).subscribe((res: any) => {
      this.industryList = res['data'];
    });
  }

  getIndustriesSectors(value) {
    let req = {
      typeId: 2,
      typeParameter: Number(value),
    };

    this.regService.getStartUpData(req).subscribe((res: any) => {
      this.sectorsList = res['data'];
    });
  }

  findInvalidControls() {
    const invalid = [];
    const controls = this.incubatorForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
        console.log('invalid', invalid);
      }
    }
    return invalid;
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

  getIntrestList() {
    let req = {
        "typeId": 3,
        "typeParameter":0
    }

    this.regService.getStartUpData(req).subscribe((res: any) => {
      this.intrestList = res['data'];
      console.log('interest list', this.intrestList);
      console.log('intrest bind row data', this.bindRowData);

      if (this.bindRowData) {
        this.incubatorForm.patchValue({
          interests: this.bindRowData?.interests_id,
        });
      }
    });
  }

  onChangeIndustyType(value) {
    this.industryObject = this.industryList.find(
      (e) => e?.industry_id == value
    );
    if (this.industryObject?.industry_name == 'Others')
    {
      this.incubatorForm.get('industryOthers').setValidators([Validators.required])
      this.incubatorForm.get('industryOthers').setErrors({'required': true})
    }
    else 
    {
      this.incubatorForm.get('industryOthers').clearValidators()
      this.incubatorForm.get('industryOthers').setErrors(null)
    }
    this.getIndustriesSectors(value);
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

  onChangeIndstrySubtype(value) {
    this.sectorObj = this.sectorsList.find((e) => e.sector_id == value);
    console.log(this.sectorObj?.value);

    if (this.sectorObj?.sector_name == 'OTHERS')
    {
      this.incubatorForm.get('industrySubTypeOthers').setValidators([Validators.required])
      this.incubatorForm.get('industrySubTypeOthers').setErrors({'required': true})
    }
     
    else {
      this.incubatorForm.get('industrySubTypeOthers').clearValidators()
      this.incubatorForm.get('industrySubTypeOthers').setErrors(null)
    }

    this.incubatorForm.updateValueAndValidity();
  }

  getEditDataById() {
    let req = {
      typeId: 4,
      lgoinType: this.loginData?.login_id,
    };
    this.adminService.getInncbatorDataById(req).subscribe((res) => {
      this.bindRowData = res['data'][0];
      this.getIndustriesSectors(this.bindRowData?.industry_id);
      this.bindEditData();
    });
  }

  bindEditData() {
    this.incubatorForm.patchValue({
      incubatorName: this.bindRowData?.incubator_name,
      dateOfEstablishment: this.bindRowData?.establishment_date,
      stages: this.bindRowData?.stage_id,

      programmeDuration:
        this.bindRowData?.program_duration == 'upto 6months'
          ? 1
          : this.bindRowData?.duration == 'upto 6 to 12 months'
          ? 2
          : 3,
      graduatedIncubatees: this.bindRowData?.graduated_incubates,
      gIncubateesCount: this.bindRowData?.graduated_incubatees_count,

      industryType: this.bindRowData?.industry_id,
      industryOthers: this.bindRowData?.industry_others,
      industrySubType: this.bindRowData?.sector_id,
      industrySubTypeOthers: this.bindRowData?.sector_subtype_others,
      interests: this.bindRowData?.interest_id,

      empanelmentNumber: this.bindRowData?.dipp_implement_number,
      currentIncubatees: this.bindRowData?.current_incubates,
      brief: this.bindRowData?.brief,

      mobileNo: this.bindRowData?.contact_mobile,
      emailName: this.bindRowData?.contact_email,
      stateName: 1,

      cityName: 'city',
      applicationLink: this.bindRowData?.application_link,
      incubationLocationMap: this.bindRowData?.location,
      incubationLocationAddress: this.bindRowData?.location_address,

      poiName: this.bindRowData?.pointofcontact_name,
      poiEmailName: this.bindRowData?.pointofcontact_email,
      roleName: this.bindRowData?.pointofcontact_userrole,
      poiMobileNo: this.bindRowData?.pointofcontact_mobile_number,
      poiLandLineNo: this.bindRowData?.pointofcontact_landline_number,

      isSuccStories: this.bindRowData?.pointofcontact_success_stories,
      startupName: this.bindRowData?.startup_name,
      startupAppLink: this.bindRowData?.website,
      incubatorIn: this.bindRowData?.entered_the_incubator_in,
      startupIndiaProfileLink: this.bindRowData?.startup_india_profile_link,
      briefTagline: this.bindRowData?.startup_brief,
    });
  }
}
