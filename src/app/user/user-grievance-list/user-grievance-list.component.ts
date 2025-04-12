import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/website/register.service';
import * as fileSaver from 'file-saver';


@Component({
  selector: 'app-user-grievance-list',
  templateUrl: './user-grievance-list.component.html',
  styleUrls: ['./user-grievance-list.component.css']
})
export class UserGrievanceListComponent implements OnInit {

  constructor(private router:Router, 
    private fb:FormBuilder,
    private toastr: ToastrService,private regService:RegisterService) { }

  grievancelist=[];
  grievancedatalist=[];
  feedbackdatalist=[];
  bindRowData:any;
  bindfeedbackData:any;
  loginData:any;
  GrievanceForm: FormGroup;
  
  ngOnInit(): void {


    this.GrievanceForm = this.fb.group({
    
      grievancetype: ['0' ],
      grievancestatus: ['99'],
    

    });
    this.loginData =JSON.parse(sessionStorage.getItem('USER_DATA'));
    
    this.getgrievance();
    this.getgrievance_list();
    this.getfeedback_list();
    
  }

  // View(path) {
  //   var win = window.open();
  //   win.document.write('<iframe src="' + path + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
  //   }

  downloadFile(value)
  {
    fileSaver.saveAs(value, name);
  }
  gotogrievance(){
    this.router.navigate(["/user/user-grievanceform"])
  }

  
  getgrievance_list()
  {
    let req = {
      "p_type": 1,
      "p_login_id":Number(this.loginData?.login_id),
      "p_grievance_id":Number(this.GrievanceForm.controls.grievancetype.value),
      "p_status":Number(this.GrievanceForm.controls.grievancestatus.value)
  }
  this.grievancedatalist=[];
  this.regService.getGrievanceData(req).subscribe((res:any) => {
    if(res.status=="Valid"){
      this.grievancedatalist= JSON.parse(res.data);
    }
    
  })
  }

  getfeedback_list()
  {
    let req = {
      "p_type": 2,
      "p_login_id":Number(this.loginData?.login_id),
      "p_grievance_id":0,
      "p_status":0
  }

  this.regService.getGrievanceData(req).subscribe((res:any) => {
    if(res.status=="Valid"){
    
    this.feedbackdatalist= JSON.parse(res.data);
    }
    
  })
  }

  onClikBindRowData(li){
    this.bindRowData=li;
  }


  onClikBindfeedbackData(li){
this.bindfeedbackData=li;
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


}
