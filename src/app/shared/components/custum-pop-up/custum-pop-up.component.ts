import { Component, OnInit } from '@angular/core';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-custum-pop-up',
  templateUrl: './custum-pop-up.component.html',
  styleUrls: ['./custum-pop-up.component.css']
})
export class CustumPopUpComponent implements OnInit {
  faCheckCircle = faCheckCircle
  constructor() { }

  ngOnInit(): void {
  }

}
