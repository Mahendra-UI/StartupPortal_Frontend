import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  // BASE_API = 'https://dev-apit.e-pragati.in/startupapapi/api';
  // BASE_API = 'https://dev-startup.e-pragati.in/startupapapi/api';
  // BASE_API= "https://dev-apit.e-pragati.in/startupapapi/api";
  BASE_API= "https://apis.ap.gov.in/startupapapi/api";


  constructor(private httpClient:HttpClient) {
  }
  getAdminAllServiceDetails(ptype)
  {
   return this.httpClient.get(this.BASE_API + `/Registration/GetAllDetails?pType=${ptype}`)
  }

  getInncbatorDataById(data)
  {
   return this.httpClient.post(this.BASE_API + `/Incubater/GetIncubatorDeatils`,data); 
  }

  getStartupDataById(data)
  {
   return this.httpClient.post(this.BASE_API + `/StartUpRegistration/GetStartUpLoginMentorData`,data); 
  }

  getMentorDataById(data)
  {
   return this.httpClient.post(this.BASE_API + `/MentorRegistration/GetMentorDetails`,data); 
  }

  getAllCounts(ptype,status)
  {
    return this.httpClient.post(this.BASE_API + `/Registration/StatusCount?pType=${ptype}&Status=${status}`,{}); 
  }

  getRecordsByStatus(ptype,status)
  {
    return this.httpClient.post(this.BASE_API + `/Registration/Status?pType=${ptype}&Status=${status}`,{}); 
  }

  onSubmitAdminAction(data)
  {
    return this.httpClient.post(this.BASE_API + `/Registration/Admin`,data);
  }

}
