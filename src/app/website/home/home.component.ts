import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as AOS from 'aos';
import { SwiperOptions } from 'swiper';
import { RegisterService } from '../register.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslationService } from 'src/app/translation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  closeBtn: boolean = true;


isTranslationTelugu: boolean = false;
  authToken;
  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private regService: RegisterService,
    private spinner: NgxSpinnerService,
    private translationSer: TranslationService
  ) {}

  ngOnInit(): void {
    this.translationSer.valBoolean.subscribe((key: boolean) => {
      this.isTranslationTelugu = key
    });
    this.route.queryParams.subscribe((params) => {
      this.authToken = params['auth_token'];
      if (
        this.authToken != null ||
        this.authToken != undefined ||
        this.authToken != '' ||
        this.authToken == 'undefined'
      ) {
        this.spinner.show();
        if(typeof(this.authToken) == 'object'){
          sessionStorage.setItem('authToken', this.authToken[0]);
          sessionStorage.setItem('token', this.authToken[0]);
        }
        else{
          sessionStorage.setItem('authToken', this.authToken);
          sessionStorage.setItem('token', this.authToken);  
        }
        sessionStorage.setItem('role', 'Startup');
        this.getUserDetails(this.authToken);
      }
    });
    AOS.init();
  }
  getUserDetails(token: any) {
    if (
      this.authToken == '' ||
      this.authToken == 'undefined' ||
      this.authToken == undefined ||
      this.authToken == null
    ) {
      this.spinner.hide();

      return;
    } else {
      this.spinner.show();
      this.regService.ssoUserDetails(token).subscribe((data: any) => {

        if (data['status'] == 'Success') {
          sessionStorage.setItem('ssoData', data['ssoData']);
          var emailId= JSON.parse(data['ssoData'])
          this.getSSOLoggedUserData(emailId['email']);
          // this.getSSOLoggedUserData(data['data'][0]['v_email']);
        } else if (data['status'] == 'Failed') {
          this.spinner.hide();

          this.router.navigate(['/home/login']);
          this.toastr.error('Login is unsuccessful', 'Error');
        }
      });
    }
  }

  getSSOLoggedUserData(email: any) {
    this.regService.ssoLoginUserData(email).subscribe((data: any) => {
      if (data['status'] == 'Success') {
        this.spinner.hide();

        sessionStorage.setItem('USER_DATA', JSON.stringify(data['data']));
        sessionStorage.setItem('token', data['data']['token']);
        this.router.navigate(['/user/home']);
      } else {
        this.spinner.hide();

        this.router.navigate(['/home/login']);
        this.toastr.error('Login is unsuccessful', 'Error');
      }
    });
  }
  imageObject: Array<object> = [
    {
      image: 'https://via.placeholder.com/600.png/345',
      thumbImage: 'https://via.placeholder.com/1200.png/345',
      title: 'Slider Image 1',
      alt: 'Image Alt 1',
    },
    {
      image: 'https://via.placeholder.com/600.png/643',
      thumbImage: 'https://via.placeholder.com/1200.png/643',
      title: 'Slider Image 2',
      alt: 'Image Alt 2',
    },
    {
      image: 'https://via.placeholder.com/600.png/8w4',
      thumbImage: 'https://via.placeholder.com/1200.png/8w4',
      title: 'Slider Image 3',
      alt: 'Image Alt 3',
    },
    {
      image: 'https://via.placeholder.com/600.png/347',
      thumbImage: 'https://via.placeholder.com/1200.png/347',
      title: 'Slider Image 4',
      alt: 'Image Alt 4',
    },
    {
      image: 'https://via.placeholder.com/600.png/953',
      thumbImage: 'https://via.placeholder.com/1200.png/953',
      title: 'Slider Image 5',
      alt: 'Image Alt 5',
    },
    {
      image: 'https://via.placeholder.com/600.png/953',
      thumbImage: 'https://via.placeholder.com/1200.png/953',
      title: 'Slider Image 5',
      alt: 'Image Alt 5',
    },
  ];
  ngAfterViewInit(): void {
    (<any>window).twttr.widgets?.load();
  }
}
