import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/website/register.service';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-grievancestatus',
  templateUrl: './grievancestatus.component.html',
  styleUrls: ['./grievancestatus.component.css']
})
export class GrievancestatusComponent implements OnInit {

  constructor(private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService, private regService: RegisterService) { }

  GrievanceForm: FormGroup;
  grievancedatalist=[];
  bindRowData: any;
  
  getgrievance_list() {
    let req = {
      "p_type": 3,
      "p_login_id": Number(this.GrievanceForm.controls.trackid.value),
      "p_grievance_id": 0,
      "p_status": 0
    }
    this.grievancedatalist = [];
    this.regService.getGrievanceData(req).subscribe((res: any) => {

      this.grievancedatalist = JSON.parse(res.data);

    })
  }

  onClikBindRowData(li) {
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
  ngOnInit(): void {


    this.GrievanceForm = this.fb.group({

      trackid: [''],
    

    });
  }

}
