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
  updatePost(postData: any) {
    return this.httpClient.post(`${this.BASE_API}/Career/UpdatePost`, postData);
  }  
  
  getAllCareerPosts() {
    return this.httpClient.post(this.BASE_API + '/Career/GetPosts', {}); // empty body as per Swagger
  }
  getCareerPostById(id: number) {
    return this.httpClient.post(`${this.BASE_API}/Career/GetPostsById?Id=${id}`, {});
  }
  
  // register.service.ts
// Add this method in your register.service.ts file
// submitCareerApplication(formData: FormData) {
//   return this.httpClient.post(
//     this.BASE_API + "/Career/AddApplicantDetails",
//     formData
//   );
// }
  

submitCareerApplication(formData: any) {
  //     const headers: any = new HttpHeaders({'Content-Type': "application/json"});
  // return this.httpClient.post(
  //   this.BASE_API + "/Career/AddApplicantDetails",
  //   formData, {headers : headers}
  // );

  return this.httpClient.post(
    this.BASE_API + "/Career/AddApplicantDetails",
    formData);
}


// getApplicantDetailsById(id: number) {
//   const url = `${this.BASE_API}/GetApplicantDetailsById?Id=${id}`;
//   const headers = new HttpHeaders({ 'accept': 'text/plain' });
  
//   return this.httpClient.post(url, {}, { headers });
// }
  
  
  
getApplicantDetailsById(id: number) {
  const url = `https://apis.ap.gov.in/startupapapi/api/Career/GetApplicantDetailsById?Id=${id}`;
  return this.httpClient.post(url, {}, { headers: { 'accept': 'text/plain' } });
}

// getApplicants() {
//   return this.httpClient.post(`${this.BASE_API}/Career/GetApplicantDetails`, {}); // No payload required
// }

// getApplicantById(id: number) {
//   return this.httpClient.post(`${this.BASE_API}/Careers/GetApplicantDetailsById`, { Id: id });
// }


getApplicants() {
  return this.httpClient.post(`${this.BASE_API}/Career/GetApplicantDetails`, {}); // still POST with empty body
}

getApplicantById(id: number) {
  return this.httpClient.post(`${this.BASE_API}/Career/GetApplicantDetailsById?Id=${id}`, ''); // POST with query param and empty body
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
