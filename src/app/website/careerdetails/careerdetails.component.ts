import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careerdetails',
  templateUrl: './careerdetails.component.html',
  styleUrls: ['./careerdetails.component.css']
})
export class CareerdetailsComponent implements OnInit {

  notiticationId: any;

  constructor() { }

  ngOnInit(): void {
    const career_id_str = sessionStorage.getItem('selected_career_id');
    this.notiticationId = career_id_str ? Number(career_id_str) : null;
  }

}
