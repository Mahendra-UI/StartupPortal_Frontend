import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';
import { DomSanitizer } from '@angular/platform-browser';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-user-startup-view',
  templateUrl: './user-startup-view.component.html',
  styleUrls: ['./user-startup-view.component.css']
})
export class UserStartupViewComponent implements OnInit {

  bindRowData:any;
  loginData:any;
  constructor(private adminService:AdminService, private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    this.loginData =JSON.parse(sessionStorage.getItem('USER_DATA'));
    this.getIncubatorDataById()
  }

  getIncubatorDataById()
  {
    this.loginData = JSON.parse(sessionStorage.getItem('USER_DATA'));
    let req = 
      {
        "typeId": 2,
        "loginType": this.loginData?.login_id
      }
    this.adminService.getStartupDataById(req).subscribe(res => {
      this.bindRowData = res["data"][0]
      
    })
  }

  fileView(file: any){
    return this.sanitizer.bypassSecurityTrustResourceUrl(file);
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
