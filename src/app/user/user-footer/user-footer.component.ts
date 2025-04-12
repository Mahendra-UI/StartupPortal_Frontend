import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-user-footer',
  templateUrl: './user-footer.component.html',
  styleUrls: ['./user-footer.component.css']
})
export class UserFooterComponent implements OnInit {
  @Input() userExists!:boolean
  constructor() { }

  ngOnInit(): void {
  }

}
