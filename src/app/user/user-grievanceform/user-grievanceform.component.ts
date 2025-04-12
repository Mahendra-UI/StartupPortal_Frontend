import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/website/register.service';
import { utilsService } from 'src/app/website/utils.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-grievanceform',
  templateUrl: './user-grievanceform.component.html',
  styleUrls: ['./user-grievanceform.component.css']
})
export class UserGrievanceformComponent implements OnInit {

  constructor(private router:Router, 
    private fb:FormBuilder,
    private toastr: ToastrService,private regService:RegisterService, private utils:utilsService) { }


  GrievanceForm: FormGroup;
  
  submitted = false;
  loginData:any;
  grievancelist=[];
  get GrievanceFormControls() {
    return this.GrievanceForm.controls;
  }

  ngOnInit(): void {


    this.loginData =JSON.parse(sessionStorage.getItem('USER_DATA'));
    

    this.GrievanceForm = this.fb.group({
    
      submissiontype: ['G', [Validators.required]],
      // name: ['', [Validators.required]],
      name: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z ]*$')],
      ],
      mobileno: ['', [Validators.required, Validators.minLength(10), Validators.pattern('[6-9]\\d{9}')]],
      emailid: ['',[Validators.required,Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      pincode:['',[Validators.required, Validators.minLength(6)]],
      address: ['', [Validators.required]],
      suggetiondescription: ['', [Validators.required]],
      grievancetype: ['', [Validators.required]],
      grievancedesc: ['', [Validators.required]],
      fileupload: ['',[Validators.required]],
      captchacode:['', [Validators.required]]

    });


    this.getgrievance();
    this.loadcaptcha()
    
  }
  imageBase64:string;
  loadcaptcha(){
      
    this.regService.getcaptcha().subscribe((res: any) => {

      this.imageBase64 = res.imgurl;
      sessionStorage.setItem("Capchid", this.utils.encrypt(res.Capchid));
            
    })
  
}

  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  findInvalidControls() {
    const invalid = [];
    const controls = this.GrievanceForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
        console.log('invalid', invalid);
      }
    }
    return invalid;
  }
  gotogrievancelist(){
    this.router.navigate(["/user/user-grievancelist"])

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
        text: 'File too Big, please select a file less than 2mb'
      })
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
  handleFileInput(event: any) {
    if (this.fileSizeValidate(event.target.files[0])) {
      if(this.fileTypeCheck(event.target.files[0])){

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event: any) => {
      console.log(reader.result);
      
      this.GrievanceFormControls.fileupload.setValue(reader.result)
    }}
    else{
    event.target.value = '';
    }
  }
    else {
      event.target.value = ''
    }
  }


  getgrievance()
  {
    let req = {
      "typeId": 10,
      "typeParameter":0
  }

  this.regService.getStartUpData(req).subscribe((res:any) => {
    this.grievancelist = res['data'];
  })
  }


  


  resettype(type){


    
    if(type=='G'){
      this.GrievanceFormControls.suggetiondescription.setValue("");
      
    }
    else{
      this.GrievanceFormControls.grievancetype.setValue("");
      this.GrievanceFormControls.grievancedesc.setValue("");
      this.GrievanceFormControls.fileupload.setValue("");
      
    }
  }
  onSubmit() {


    if(this.GrievanceForm.value.submissiontype=="G"){

      this.GrievanceFormControls.suggetiondescription.clearValidators();
      this.GrievanceFormControls.suggetiondescription.updateValueAndValidity();
   
      
      this.GrievanceFormControls.grievancetype.setValidators([Validators.required]);
      this.GrievanceFormControls.grievancetype.updateValueAndValidity();
   

      this.GrievanceFormControls.grievancedesc.setValidators([Validators.required]);
      this.GrievanceFormControls.grievancedesc.updateValueAndValidity();
   
      this.GrievanceFormControls.fileupload.setValidators([Validators.required]);
      this.GrievanceFormControls.fileupload.updateValueAndValidity();

      
   
      
    }
    else{
      
      this.GrievanceFormControls.suggetiondescription.setValidators([Validators.required]);
      this.GrievanceFormControls.suggetiondescription.updateValueAndValidity();
   
      this.GrievanceFormControls.grievancetype.clearValidators();
      this.GrievanceFormControls.grievancetype.updateValueAndValidity();
   
      this.GrievanceFormControls.grievancedesc.clearValidators();
      this.GrievanceFormControls.grievancedesc.updateValueAndValidity();
   
      this.GrievanceFormControls.fileupload.clearValidators();
      this.GrievanceFormControls.fileupload.updateValueAndValidity();
   
    }
   
    this.findInvalidControls();
    this.submitted = true;
    console.log('valid',this.GrievanceForm.valid);
    if(!this.GrievanceForm.valid)
    return;

    

    let grievanceModelObject = {
      "grievance": Number(this.GrievanceForm.value.grievancetype),
      "name":this.GrievanceForm.value.name,
      "number":this.GrievanceForm.value.mobileno,
      "email":this.GrievanceForm.value.emailid,
      "pin_code":this.GrievanceForm.value.pincode, 
      "address":this.GrievanceForm.value.address, 
      "suggestions_description":this.GrievanceForm.value.suggetiondescription , 
      "grievance_description":this.GrievanceForm.value.grievancedesc ,
      "file_path":this.GrievanceForm.value.fileupload,
      "isCaptchaCheckRequired": 'true',
      "captchacode": this.GrievanceForm.value.captchacode,
      "Capchid": this.utils.decrypt(sessionStorage.getItem("Capchid"))
    }
    this.loginData = JSON.parse(sessionStorage.getItem('USER_DATA'));

    let sendgrievanceObject  = {
      "TypeId": 1,
     "LoginId": Number(this.loginData?.login_id),
     "grievanceModel":grievanceModelObject
    }

  console.log('send object***',sendgrievanceObject);
  
  this.regService.savegrievance(sendgrievanceObject).subscribe(res => {
    console.log('res***', res);
    if(res['message']=="Success")
    {
      this.toastr.success('Saved successfully...', 'Success');
      this.gotogrievancelist();
      this.GrievanceForm.patchValue({
        captchacode: ''
      })
      this.loadcaptcha()
    }

    else
    this.toastr.error('Failed...', 'Faiuure')
    
  })
  }


}
