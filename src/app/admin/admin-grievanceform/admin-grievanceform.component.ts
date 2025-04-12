import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/website/register.service';
import { NgxSpinnerService } from "ngx-spinner";
import * as fileSaver from 'file-saver';


@Component({
  selector: 'app-admin-grievanceform',
  templateUrl: './admin-grievanceform.component.html',
  styleUrls: ['./admin-grievanceform.component.css']
})
export class AdminGrievanceformComponent implements OnInit {

  constructor(private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService, private regService: RegisterService, private spinner: NgxSpinnerService) { }

  grievancelist = [];
  grievancedatalist = [];
  feedbackdatalist = [];
  bindRowData: any;
  bindfeedbackData: any;
  loginData: any;
  GrievanceForm: FormGroup;
  GrievanceFormadmin: FormGroup;
  submitted=false;
  page: number = 1;
  feedBackPage: number = 1;
  count: number = 0;

  tableSize: number = 10;
  feedBackTableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];

  ngOnInit(): void {


    this.GrievanceForm = this.fb.group({

      grievancetype: ['0'],
      grievancestatus: ['99'],


    });
    this.GrievanceFormadmin = this.fb.group({

      admincomment: ['', [Validators.required]],


    });
    this.loginData = JSON.parse(sessionStorage.getItem('USER_DATA'));

    this.getgrievance();
    this.getgrievance_list();
    this.getfeedback_list();

  }



  getgrievance_list() {
    this.spinner.show()
    let req = {
      "p_type": 1,
      "p_login_id": 0,
      "p_grievance_id": Number(this.GrievanceForm.controls.grievancetype.value),
      "p_status": Number(this.GrievanceForm.controls.grievancestatus.value)
    }
    this.grievancedatalist = [];
    this.regService.getGrievanceData(req).subscribe((res: any) => {
      this.spinner.hide()
      this.grievancedatalist = JSON.parse(res.data);
      this.grievancedatalist = this.grievancedatalist.map((e,i) => {
        e['sNo']= i+1;
        return e;
      })
      

    }, error => {
      this.spinner.hide()

    })
  }

  findInvalidControls() {
    const invalid = [];
    const controls = this.GrievanceFormadmin.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
        console.log('invalid', invalid);
      }
    }
    return invalid;
  }
  Closegrievance(tracking_id) {

    this.submitted=true;
    this.findInvalidControls();
    if (!this.GrievanceFormadmin.valid)
      return;
    else {
      let req = {
        "p_type": 1,
        "trackid": tracking_id,
        "comments": this.GrievanceFormadmin.controls.admincomment.value,
        "p_status": 1
      }
      this.regService.closegrievance(req).subscribe((res: any) => {


        window.location.reload();

      })
    }
  }

  getfeedback_list() {
    let req = {
      "p_type": 2,
      "p_login_id": 0,
      "p_grievance_id": 0,
      "p_status": 0
    }

    this.regService.getGrievanceData(req).subscribe((res: any) => {

      this.feedbackdatalist = JSON.parse(res.data);
      this.feedbackdatalist = this.feedbackdatalist.map((e,i) => {
        e['sNo']= i+1;
        return e;
      })

    })
  }

  onClikBindRowData(li) {
    this.bindRowData = li;
  }


  onClikBindfeedbackData(li) {
    this.bindfeedbackData = li;
  }

  // View(path) {
  //   var win = window.open();
  //   win.document.write('<iframe src="' + path + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
  //   }

  downloadFile(value)
  {
    fileSaver.saveAs(value, name);
  }

  getgrievance() {
    let req = {
      "typeId": 10,
      "typeParameter": 0
    }

    this.regService.getStartUpData(req).subscribe((res: any) => {
      this.grievancelist = res['data'];
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    }
  onFeedBackTableDataChange(event: any) {
      this.feedBackPage = event;
  }



}
