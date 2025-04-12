import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { MustMatch } from '../password-validator';
import { utilsService } from '../utils.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regForm:FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  submitted:boolean = false;
  showConfirmValidator:boolean = false;
  imageBase64:any;

  constructor(private router:Router, 
             private fb:FormBuilder,
             private toastr: ToastrService,
             private regService:RegisterService,
             private utils:utilsService) { }

  

  ngOnInit(): void {
    this.regForm  = this.fb.group({
      userType: ['', [Validators.required]],
      fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      mobileNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required,Validators.pattern(this.emailPattern)]],
      password:['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,}')]],
      confirmPassword:['', [Validators.required]],
      isAccepted:['',[Validators.required]],
      captchacode:['', [Validators.required]]
    }, 
    {
      validator: MustMatch('password', 'confirmPassword')}
    )
      this.loadcaptcha();
    
  }

  get regFormControls()
  {
    return this.regForm.controls;
  }

  goToLogin()
  {
    this.router.navigate(["/home/login"])
  }

  submitRegisterForm()
  {
    this.submitted = true;
    
    if(this.regForm.invalid)
    return;

    else if(this.regForm.value.password != this.regForm.value.confirmPassword)
    {
    this.showConfirmValidator = true;
    return;
    }
    else
    this.showConfirmValidator = false;

    // if(this.utils.decrypt(sessionStorage.getItem("Capchid")) !=this.regForm.value.captchacode)
    // {
    //   this.toastr.error("Invalid Captcha Code","Failed")
    //   return;
    // }



    let registerObj = {
      "name": this.regForm.value.fullName,
      "email": this.regForm.value.email,
      "user_type": this.regForm.value.userType,
      "phone": this.regForm.value.mobileNo,
      "password": this.regForm.value.password,
      "confirm_password": this.regForm.value.confirmPassword,
      "captchacode": this.regForm.value.captchacode,
      "Capchid": this.utils.decrypt(sessionStorage.getItem("Capchid"))
    }

    console.log(registerObj);
    

    this.regService.Registration("1", registerObj).subscribe(res => {
      if(res['message']=="Success")
      {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Registered successfully'
        }).then(() => {
          this.router.navigate(['/login'])
          this.regForm.reset();          
        })
      // this.toastr.success("Registered successfully","Success")
      }
      else if(res['status']=="Failed")
      {
        if(res['data'])
        // this.toastr.error(res['data'][0]["status"],"Failure")
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: res['message']
        })
        else if (res['status'] == "Failed") {
          this.toastr.error(res["message"], "Failed")
          this.regForm.patchValue({
            captchacode: ''
          })
          this.loadcaptcha()
        }
        // Swal.fire('Error', res['data'][0]["status"]);

      }
      else if (res['status'] == "Invalid") {
        console.log('invalid loading');
        console.log(res['data'][0]["status"]);
        this.toastr.error(res['data'][0]["status"], "Failed")
        this.regForm.patchValue({
          captchacode: ''
        })
        this.loadcaptcha()
      }



    })
    console.log('regForm values',this.regForm.value);
    
  }
  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  loadcaptcha(){
      this.regService.getcaptcha().subscribe((res: any) => {
      this.imageBase64 = res.imgurl;
      sessionStorage.setItem("Capchid", this.utils.encrypt(res.Capchid));
    })
}

  
}
