import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-card-input',
  templateUrl: './filter-card-input.component.html',
  styleUrls: ['./filter-card-input.component.scss'],
  host: {'class': 'col-4'}
})
export class FilterCardInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
