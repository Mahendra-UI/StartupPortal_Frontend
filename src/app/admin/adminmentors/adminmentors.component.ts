import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-adminmentors',
  templateUrl: './adminmentors.component.html',
  styleUrls: ['./adminmentors.component.css']
})
export class AdminmentorsComponent implements OnInit {
  adminMentorList:any =[];
  bindRowData:any;
  adminStatus:any;
  adminForm:FormGroup;
  submitted:boolean = false;
  adminStartupList = []; 
  approveCnt:any = 0;
  rejectdCnt:any = 0;
  reviewCnt:any = 0;
  pendingCnt:any =0 ;
  countRes:any =[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private adminService:AdminService,
              private fb:FormBuilder,
               private toastr: ToastrService, private spinner: NgxSpinnerService
            ) { }

  ngOnInit(): void {
    // this.getAllMentorAdminDetails();
    this.getRecordsByStatus(3,1)
    this.adminForm = this.fb.group({
      comments: ['', [Validators.required]]
    })
    this.getAllCounts();
  }
  getRecordsByStatus(ptype,status)
  {
    console.log(status);
    this.spinner.show()
    this.adminService.getRecordsByStatus(ptype,status).subscribe(res=>{
      this.adminMentorList = res["data"]
    //  this.adminMentorList = this.adminMentorList.reverse();
      this.adminMentorList = this.adminMentorList.map((e,i) => {
        e['sNo']= i+1;
        return e;
      })
    this.spinner.hide()

      console.log('res**', this.adminStartupList);
    },
    (error) => {
    this.spinner.hide()

      this.adminMentorList =[]
    })
  }
  getAllMentorAdminDetails()
  {
    this.adminService.getAdminAllServiceDetails(3).subscribe(res => {
      console.log('res***', res);
      
      this.adminMentorList = res["data"]
      
    })
  }

  getAllCounts()
  {
    this.adminService.getAllCounts(3,0).subscribe(res => {
      this.countRes = res['data'];

        this.approveCnt = this.countRes.find(e => e?.application_status == 'Approved');
        this.reviewCnt =this.countRes.find(e => e?.application_status == 'Reviewed');
        this.pendingCnt =this.countRes.find(e => e?.application_status == 'Pending');
        this.rejectdCnt = this.countRes.find(e => e?.application_status == 'Rejected');
    })
  }

  onClikBindRowData(li)
  {
    this.bindRowData = li;
  }

  onClkAdminSubmit()
  {
    let adminObj = {
      "p_type": 3,
      "p_login_id": this.bindRowData?.login_id,
      "p_comment_by_admin": this.adminForm.value.comments,
      "p_comment_by_superadmin": "string",
      "p_status": this.adminStatus
    }

    console.log('admin object', adminObj);
    this.adminService.onSubmitAdminAction(adminObj).subscribe(res => {
      if(res['message']=="Success")
      this.toastr.success('updated successfully...', 'Success');
      else
      this.toastr.error('Failed...', 'Faiuure')

      this.getRecordsByStatus(3,1);

    })
    
    
  }

  get adminFormControls() {
    return this.adminForm.controls;
  }

  onClickAdminAction(status)
  {
   this.adminStatus = status;
   this.submitted = false;
  this.adminForm.controls['comments'].setValue('')
  }

  // View(path) {
  //   var win = window.open();
  //   win.document.write('<iframe src="' + path + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
  // }

  downloadFile(value)
  {
    fileSaver.saveAs(value, name);
  }
  onTableDataChange(event: any) {
    this.page = event;
    }


}
