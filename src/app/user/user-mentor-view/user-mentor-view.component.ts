import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-user-mentor-view',
  templateUrl: './user-mentor-view.component.html',
  styleUrls: ['./user-mentor-view.component.css']
})
export class UserMentorViewComponent implements OnInit {
  bindRowData:any;
  loginData:any;
  constructor(private adminService:AdminService) { }
  ngOnInit(): void {
    this.loginData =JSON.parse(sessionStorage.getItem('USER_DATA'));
    this.getIncubatorDataById()
  }

  getIncubatorDataById()
  {
    let req = 
      {
        "typeId": 3,
        "loginType": this.loginData?.login_id
      }
    this.adminService.getMentorDataById(req).subscribe(res => {
      this.bindRowData = res["data"][0];
    })
  }
  // View(path) {
  //   var win = window.open();
  //   win.document.write('<iframe src="' + path + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
  // }
  downloadFile(value)
  {
    fileSaver.saveAs(value, name);
  }
}
