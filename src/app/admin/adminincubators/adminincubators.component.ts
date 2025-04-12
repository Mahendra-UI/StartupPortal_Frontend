import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-adminincubators',
  templateUrl: './adminincubators.component.html',
  styleUrls: ['./adminincubators.component.css']
})
export class AdminincubatorsComponent implements OnInit {
  adminIncubatorList:any =[];
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
               private toastr: ToastrService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getRecordsByStatus(4,1)

    this.adminForm = this.fb.group({
      comments: ['', [Validators.required]]
    })
    this.getAllCounts();

  }
  getRecordsByStatus(ptype,status)
  {
    console.log(status);
    this.spinner.show();
    
    this.adminService.getRecordsByStatus(ptype,status).subscribe(res=>{
      this.adminIncubatorList = res["data"]
    //  this.adminIncubatorList = this.adminIncubatorList.reverse();      
      this.adminIncubatorList = this.adminIncubatorList.map((e,i) => {
        e['sNo']= i+1;
        return e;
      })

    this.spinner.hide();

      console.log('res**', this.adminIncubatorList);
    },
    (error) => {
    this.spinner.hide();

      this.adminIncubatorList =[]
    })
  }

  getAllMentorAdminDetails()
  {
    this.adminService.getAdminAllServiceDetails(4).subscribe(res => {
      console.log('res***', res);
      
      this.adminIncubatorList = res["data"]
      
    })
  }

  onClkAdminSubmit()
  {
    let adminObj = {
      "p_type": 2,
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

      this.getRecordsByStatus(4,1);

    })
    
    
  }
  getAllCounts()
  {
    this.adminService.getAllCounts(4,0).subscribe(res => {
      this.countRes = res['data'];

        this.approveCnt = this.countRes.find(e => e?.application_status == 'Approved');
        this.reviewCnt =this.countRes.find(e => e?.application_status == 'Reviewed');
        this.pendingCnt =this.countRes.find(e => e?.application_status == 'Pending');
        this.rejectdCnt = this.countRes.find(e => e?.application_status == 'Rejected');
    })
  }


  get adminFormControls() {
    return this.adminForm.controls;
  }

  onClickAdminAction(status)
  {
    this.submitted = false;
    this.adminForm.controls['comments'].setValue('')
    this.adminStatus = status;
  }

  onClikBindRowData(li)
  {
    this.bindRowData = li;
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
