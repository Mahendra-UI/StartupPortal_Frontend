import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  // BASE_API = 'https://dev-apit.e-pragati.in/startupapapi/api';
  // BASE_API = 'https://dev-startup.e-pragati.in/startupapapi/api';
  //  BASE_API= "http://localhost:5277/api";
  BASE_API= "https://apis.ap.gov.in/startupapapi/api";


  constructor(private httpClient: HttpClient) {}

  addNewPost(data: any) {
    return this.httpClient.post(this.BASE_API + `/Career/AddNewPost`, data);
  }
  
  getAllCareerPosts() {
    return this.httpClient.post(this.BASE_API + '/Career/GetPosts', {}); // empty body as per Swagger
  }
  getCareerPostById(id: number) {
    return this.httpClient.post(`${this.BASE_API}/Career/GetPostsById?Id=${id}`, {});
  }
  
  // register.service.ts
// Add this method in your register.service.ts file
submitCareerApplication(formData: FormData) {
  return this.httpClient.post(
    this.BASE_API + "/Career/AddApplicantDetails",
    formData
  );
}
  
  
  
    

  Registration(ptype, Data) {
    return this.httpClient.post(
      this.BASE_API + `/Registration/Register?pType=${ptype}`,
      Data
    );
  }

  login(data) {
    return this.httpClient.post(this.BASE_API + `/Registration/Login`, data);
  }

  startupRegistration(data) {
    return this.httpClient.post(
      this.BASE_API + `/StartUpRegistration/StartUpRegistration`,
      data
    );
  }

  saveIncubatorRegistration(data) {
    return this.httpClient.post(
      this.BASE_API + `/Incubater/SaveIncubater`,
      data
    );
  }

  mentrorRegistration(data, typeId, loginId) {
    return this.httpClient.post(
      this.BASE_API +
        `/MentorRegistration/MentorForm?pType=${typeId}&loginId=${loginId}`,
      data
    );
  }

  getStartUpData(data) {
    return this.httpClient.post(
      this.BASE_API + `/StartUpRegistration/GetMasterStartUpIndustries`,
      data
    );
  }

  getGrievanceData(data) {
    return this.httpClient.post(
      this.BASE_API + `/Grievance/GetGrievance`,
      data
    );
  }

  savegrievance(data) {
    return this.httpClient.post(
      this.BASE_API + `/Grievance/Savegrievance`,
      data
    );
  }

  closegrievance(data) {
    return this.httpClient.post(
      this.BASE_API + `/Grievance/CloseGrievance`,
      data
    );
  }

  getcaptcha() {
    return this.httpClient.get(this.BASE_API + `/Captcha/Getcaptcha`);
  }

  ssoUserDetails(token: any) {
    // console.warn('token', token) 
    // const headers: any = new HttpHeaders({'x-auth-token': token});
    return this.httpClient.post(
      this.BASE_API + `/Registration/ValidateSSOsignUp`,
      ''
    );
  }

  ssoLoginUserData(email: any) {
    var obj = {
      "typeId": 1,
      "emilLogin": email
    }
    return this.httpClient.post(
      this.BASE_API + `/Registration/GetSSO`, obj);
  }
}
