import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/website/register.service';
import { AdminService } from 'src/app/admin/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css'],
})
export class StartupComponent implements OnInit {
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  startupForm: FormGroup;
  existingIDCardDiv: boolean = false;
  startupDetails: any;
  submitted = false;
  todayDate: any;
  date: any;
  actionBtnService: any = 'Submit';
  stageIdLIst: any = [];
  intrestIdLIst: any = [];
  loginData: any;
  serviceList: any = [];
  indsutryList: any = [];
  sectorsList: any = [];
  sectorObj: any;
  bindRowData: any;
  selectedStages: any = [];
  selectedIntrests: any = [];
  startupData:any;

  natureList: any = [];
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private regService: RegisterService,
    private adminService: AdminService
  ) {}
  stagesDropdownSettings: IDropdownSettings = {
    singleSelection: false,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 5,
    allowSearchFilter: true,
    idField: 'stage_id',
    textField: 'stage',
    noDataAvailablePlaceholderText: 'No items found',
  };
  incubatrSeettings: IDropdownSettings = {
    singleSelection: false,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 5,
    allowSearchFilter: true,
    idField: 'id',
    textField: 'interests',
    noDataAvailablePlaceholderText: 'No items found',
  };
  stagesList: any = [];
  incubeterList: any = [];
  stateList: any = [];
  ngOnInit(): void {
    this.getStages();
    this.getServices();
    this.getNatureList();
    this.getIntrestList();
    this.getStatesList();
    this.getIndustries();
    this.loginData = JSON.parse(sessionStorage.getItem('USER_DATA'));
    
    this.date = new Date().toISOString().slice(0, 10);
    this.startupForm = this.fb.group({
      startupName: [
        '',
        [Validators.required, Validators.pattern(/^[.0-9a-zA-Z\s,-\/]*$/)],
      ],
      startupType: ['', [Validators.required]],
      industryType: ['', [Validators.required]],
      stages: ['', [Validators.required]],
      brief: [
        '',
        [Validators.required],
      ],
      fundedType: [''],
      industryOthers: [''],
      industrySubType: ['', [Validators.required]],
      industrySubTypeOthers: [''],
      serviceType: ['', [Validators.required]],
      servicesOthers: [''],
      // udyogAdhaar: [''],
      udyogAdhaar: [
        '',
        [Validators.pattern(/^[0-9a-zA-Z\-]+$/)],
      ],
      natureType: ['', [Validators.required]],
      cinNumber: [
          '',
          [
            Validators.required, 
            Validators.minLength(21),
            Validators.maxLength(21),
            Validators.pattern('^[a-zA-Z0-9]+$')],
      ],
      cinLegalName: [''],
      interestedIn: ['', [Validators.required]],
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
      cityName: ['', [Validators.required]],
      websiteUrl: [''],
      mobileAppLink: [''],
      entityLogo: ['', [Validators.required]],
      incorporationCertificate: ['', [Validators.required]],
      termsConditions: ['', [Validators.required]],
      gstnumber: [
        '',
        [
          Validators.required,
          Validators.minLength(15),
          Validators.maxLength(15),Validators.pattern('^[a-zA-Z0-9]+$')
        ],
      ],
      // gstnumber: ['', [Validators.required]],
    });

    if (this.loginData?.application_status != 'Not submitted') {
      // this.getEditDataById();
    }

    let data = sessionStorage.getItem('ssoData');
    this.startupData = JSON.parse(data)
    if(this.loginData?.is_sso == true && this.loginData?.application_status == 'not submitted')
    {
      this.bindSSODevData();
    }
    else{
      if (this.loginData?.application_status != 'Not submitted') {
        this.getEditDataById();
      }
    }
  }

  bindStages() {
    let stagesid = this.bindRowData?.stage_id;
    if(stagesid)
    {
    stagesid = stagesid.split(',');
    this.stageIdLIst = stagesid;
    this.selectedStages = this.filterStageArray(this.stagesList, stagesid);
    }
  }

  bindInterests() {
    let interesId = this.bindRowData?.interest_id;
    if(interesId)
    {
    interesId = interesId.split(',');
    this.intrestIdLIst = interesId;
    this.selectedIntrests = this.filterInterestArray(
      this.incubeterList,
      interesId
    );
    }
  }

  filterStageArray(mainArray, subArray) {
    let val = mainArray.filter((elem) => {
      return subArray.some((ele) => {
        return ele == elem.stage_id;
      });
    });

    return val;
  }

  filterInterestArray(mainArray, subArray) {
    let val = mainArray.filter((elem) => {
      return subArray.some((ele) => {
        return ele == elem.id;
      });
    });

    return val;
  }

  getEditDataById() {
    this.loginData = JSON.parse(sessionStorage.getItem('USER_DATA'));
    let req = {
      typeId: 2,
      loginType: this.loginData?.login_id,
    };
    this.adminService.getStartupDataById(req).subscribe((res) => {
      this.bindRowData = res['data'][0];
      this.getIndustriesSectors(this.bindRowData?.industry_id);
      this.bindStages();
      this.bindInterests();
      if(this.bindRowData)
      this.bindEditData();
      });
    }
  bindSSODevData()
  {
    console.log('bind dev data is calling', this.startupData);
    
    console.log('bind dev data is email', this.startupData?.email)
    this.startupForm.patchValue({
      startupName: this.startupData?.name,
      // gstnumber: this.startupData?.gst_number,
      // startupType: this.startupData?.role,

      // fundedType: this.startupData?.funded_type,
      // stages: this.selectedStages,
      // industryType: this.startupData?.industry,

      // industrySubType: this.startupData?.sectors,
      // serviceType: this.startupData?.services,
      udyogAdhaar: this.startupData?.udyogAadhar,

      // natureType: this.startupData?.startupEntity,
      cinNumber: this.startupData?.cin,
      cinLegalName: this.startupData?.legalName,

      // interestedIn: this.selectedIntrests,
      // brief: this.startupData?.brief,

      // industryOthers: this.startupData?.industry_others,
      // industrySubTypeOthers: this.startupData?.sector_subtype_others,
      // servicesOthers: this.startupData?.services_others,

      mobileNo: this.startupData?.phone,
      emailName: this.startupData?.email,
      stateName: this.startupData?.state,

      cityName: this.startupData?.city,
      websiteUrl: this.startupData?.website,
      // mobileAppLink: this.startupData?.contact_mobile_app_link,

      // entityLogo: this.startupData?.image,
      // incorporationCertificate: this.startupData?.registration_certificate,
      // termsConditions: '',
    });

    console.log('form value',this.startupForm.value);
    
  }
  bindEditData() {
    console.log('bind edit data is calling****');
    
    this.startupForm.patchValue({
      startupName: this.bindRowData?.startup_name,
      gstnumber: this.bindRowData?.gst_number,
      startupType: this.bindRowData?.funded_or_bootstraped,

      fundedType: this.bindRowData?.funded_type,
      stages: this.selectedStages,
      industryType: this.bindRowData?.industry_id,

      industrySubType: this.bindRowData?.sector_id,
      serviceType: this.bindRowData?.service_id,
      udyogAdhaar: this.bindRowData?.udyog_aadhaar,

      natureType: this.bindRowData?.entity_id,
      cinNumber: this.bindRowData?.cin,
      cinLegalName: this.bindRowData?.legal_name,

      interestedIn: this.selectedIntrests,
      brief: this.bindRowData?.brief,

      industryOthers: this.bindRowData?.industry_others,
      industrySubTypeOthers: this.bindRowData?.sector_subtype_others,
      servicesOthers: this.bindRowData?.services_others,

      mobileNo: this.bindRowData?.contact_mobile,
      emailName: this.bindRowData?.contact_email,
      stateName: this.bindRowData?.state_id,

      cityName: this.bindRowData?.contact_city,
      websiteUrl: this.bindRowData?.contact_website,
      mobileAppLink: this.bindRowData?.contact_mobile_app_link,

      entityLogo: this.bindRowData?.company_logo,
      incorporationCertificate: this.bindRowData?.registration_certificate,
      termsConditions: '',
    });
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
  get startupFormControls() {
    return this.startupForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.findInvalidControls();
    if (!this.startupForm.valid) return;

    let starupModalObject = {
      startup_name: this.startupForm.value.startupName,
      funded_or_bootstraped: this.startupForm.value.startupType,
      industry_id: this.startupForm.value.industryType,
      stage_id: this.stageIdLIst.join(),
      brief: this.startupForm.value.brief,
      funded_type: this.startupForm.value.fundedType,
      industry_others: this.startupForm.value.industryOthers,
      sector_id: this.startupForm.value.industrySubType,
      sector_subtype_others: this.startupForm.value.industrySubTypeOthers,
      service_id: this.startupForm.value.serviceType,
      services_others: this.startupForm.value.servicesOthers,
      udyog_aadhaar: this.startupForm.value.udyogAdhaar,
      entity_id: this.startupForm.value.natureType,
      cin: this.startupForm.value.cinNumber,
      legal_name: this.startupForm.value.cinLegalName,
      interest_id: this.intrestIdLIst.join(),
      contact_mobile: this.startupForm.value.mobileNo,
      contact_email: this.startupForm.value.emailName,
      contact_state: this.startupForm.value.stateName,
      contact_city: this.startupForm.value.cityName,
      contact_website: this.startupForm.value.websiteUrl,
      link: this.startupForm.value.mobileAppLink,
      logo: this.startupForm.value.entityLogo,
      registration_certificate: this.startupForm.value.incorporationCertificate,
      gst_number: this.startupForm.value.gstnumber,
      // "key25":this.startupForm.value.termsConditions,
    };

    let sendStarupObject = {
      typeId: this.loginData?.application_status == 'reviewed' ? 2 : 1,
      login: Number(this.loginData?.login_id),
      startUpModel: starupModalObject,
    };

    // sendStarupObject = {"typeId":2,"login":166,"startUpModel":{"startup_name":"startupname","funded_or_bootstraped":"1","industry_id":"8","stage_id":"2","brief":"brieff","funded_type":"2","industry_others":null,"sector_id":"23","sector_subtype_others":"Others","service_id":"4","services_others":null,"udyog_aadhaar":"udygo","entity_id":"2","cin":"cin","legal_name":"lega nam","interest_id":"5","contact_mobile":"8765768786","contact_email":"sad@asdc.ocm","contact_state":"9","contact_city":"city","contact_website":"websiteurl","link":"app link","logo":"","registration_certificate":"","gst_number":"gst"}}

    this.regService.startupRegistration(sendStarupObject).subscribe((res) => {
      if (res['message'] == 'Success')
      {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text:
            this.loginData?.application_status == 'reviewed'
              ? 'Updated Successfully'
              : 'Saved Successfully',
        }).then(() => {
        });
        this.startupForm.reset();
        sessionStorage.removeItem('USER_DATA');
        this.router.navigate(['/user/home']);
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

  loginManually()
  {
    let obj = JSON.parse(sessionStorage.getItem('registerObj'));
    let registerObj = {
      "pType": 2,
      "email": obj?.email,
      "password": obj?.password,
      "captchacode": obj?.captchacode,
      "Capchid": obj?.Capchid,
      "isLogin":false
    }
    this.regService.login(registerObj).subscribe((res: any) => {
      let id = res?.login_id;
        let decryptValue:any = atob(res?.key)
        let orgKey = decryptValue/5588994422
      if (res['status'] == "Success" && id == orgKey) {
        this.loginData = res;
        sessionStorage.setItem("USER_DATA", JSON.stringify(res));
        this.router.navigate(['/user/home']);
      }
    })
  }

  findInvalidControls() {
    const invalid = [];
    const controls = this.startupForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
        console.log('invalid', invalid);
      }
    }
    return invalid;
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

  handleFileInput(event: any) {
    if (this.fileSizeValidate(event.target.files[0])) {
      if (this.fileTypeCheck(event.target.files[0])) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event: any) => {
          this.startupForm.patchValue({
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

  handleCertificateFileInput(event: any) {
    if (this.fileSizeValidate(event.target.files[0])) {
      if (this.fileTypeCheck(event.target.files[0])) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event: any) => {
          this.startupForm.patchValue({
            incorporationCertificate: reader.result,
          });
        };
      } else {
        event.target.value = '';
      }
    } else {
      event.target.value = '';
    }
  }

  onChangeStartUpType(value) {
    if (value == '1')
    {
      this.startupForm.get('fundedType').setValidators([Validators.required])
      this.startupForm.get('fundedType').setErrors({'required': true})
    }
    else {
      this.startupForm.get('fundedType').clearValidators()
    this.startupForm.get('fundedType').setErrors(null)
    }

    this.startupForm.updateValueAndValidity();
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

  onChangeIndustyType(value) {
    if (value == '53')
    {
      this.startupForm.get('industryOthers').setValidators([Validators.required])
      this.startupForm.get('industryOthers').setErrors({'required': true})
    } 
    else {
      this.startupForm.get('industryOthers').clearValidators()
    this.startupForm.get('industryOthers').setErrors(null)
    }

    this.getIndustriesSectors(value);

    this.startupForm.updateValueAndValidity();
  }
  onChangeIndstrySubtype(value) {
    this.sectorObj = this.sectorsList.find((e) => e.sector_id == value);
    if (this.sectorObj?.sector_name == 'OTHERS')
    {
     this.startupForm.get('industrySubTypeOthers').setValidators([Validators.required])
      this.startupForm.get('industrySubTypeOthers').setErrors({'required': true})
    }
    else {
      this.startupForm.get('industrySubTypeOthers').clearValidators()
    this.startupForm.get('industrySubTypeOthers').setErrors(null)
    }

    this.startupForm.updateValueAndValidity();
  }

  onChangeServiceType(value) {
    if (value == '15')
    {
      this.startupForm.get('servicesOthers').setValidators([Validators.required])
      this.startupForm.get('servicesOthers').setErrors({'required': true})
    }
    else {
      this.startupForm.get('servicesOthers').clearValidators()
      this.startupForm.get('servicesOthers').setErrors(null)
    }

    this.startupForm.updateValueAndValidity();
  }
  onSelectStage(event) {
    this.findStagesId(this.startupForm.get('stages').value);
  }
  onSelecttStageAll(event) {
    this.stageIdLIst = this.stagesList.map((e) => e?.stage_id);
  }
  onDeSelecttStage(event) {
    this.findStagesId(this.startupForm.get('stages').value);
  }
  onDeSelecttStageAll(event) {
    this.stageIdLIst = [];
  }

  findStagesId(stageArr) {
    this.stageIdLIst = [];
    if (stageArr.length) {
      this.stageIdLIst = stageArr.map((e) => e?.stage_id);
    }
  }

  onSelectinterestedIn(event) {
    this.findInteresetedId(this.startupForm.get('interestedIn').value);
  }
  onSelecttinterestedInAll(event) {
    this.intrestIdLIst = this.incubeterList.map((e) => e?.id);
  }
  onDeSelectinterestedIn(event) {
    this.findInteresetedId(this.startupForm.get('interestedIn').value);
  }
  onDeSelecttinterestedIn(event) {
    this.intrestIdLIst = [];
  }

  findInteresetedId(intrArr) {
    this.intrestIdLIst = [];
    if (intrArr.length) {
      this.intrestIdLIst = intrArr.map((e) => e?.id);
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

  getServices() {
    let req = {
      typeId: 3,
      typeParameter: 0,
    };

    this.regService.getStartUpData(req).subscribe((res: any) => {
      this.serviceList = res['data'];
    });
  }

  getNatureList() {
    let req = {
      typeId: 4,
      typeParameter: 0,
    };

    this.regService.getStartUpData(req).subscribe((res: any) => {
      console.warn('natureList', res['data'])
      this.natureList = res['data'];
    });
  }
  getIntrestList() {
    let req = {
      typeId: 5,
      typeParameter: 0,
    };

    this.regService.getStartUpData(req).subscribe((res: any) => {
      this.incubeterList = res['data'];
    });
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

  getIndustries() {
    let req = {
      typeId: 9,
      typeParameter: 0,
    };

    this.regService.getStartUpData(req).subscribe((res: any) => {
      this.indsutryList = res['data'];
    });
  }

  getIndustriesSectors(value) {
    let req = {
      typeId: 2,
      typeParameter: Number(value),
    };
    console.warn('req getIndustriesSectors', req)
    this.regService.getStartUpData(req).subscribe((res: any) => {
      this.sectorsList = res['data'];
      if (this.bindRowData?.sector_id)
        this.onChangeIndstrySubtype(this.bindRowData?.sector_id);
    });
  }

  editCompanyLogo() {
    this.bindRowData.company_logo = '';
  
    this.startupForm.patchValue({
      entityLogo: '',
    });
    
  }

  editRegisterCerificate() {
    this.bindRowData.registration_certificate = '';
  
    this.startupForm.patchValue({
      incorporationCertificate: '',
    });
    
  }
}
