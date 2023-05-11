import { Component, OnInit } from '@angular/core';
import { TodayComponent } from './today/today.component';

@Component({
  selector: 'app-dasboard',
  // imports : [TodayComponent],
  // standalone : true,
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css'],
  
})
export class DasboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
