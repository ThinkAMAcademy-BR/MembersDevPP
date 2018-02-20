import {Component, EventEmitter, OnInit, Output, HostListener} from '@angular/core';

@Component({
  selector: 'app-filter-card-input',
  templateUrl: './filter-card-input.component.html',
  styleUrls: ['./filter-card-input.component.scss'],
  host: {'class': 'col-4'}
})
export class FilterCardInputComponent implements OnInit {
  @Output() onCardFilter = new EventEmitter<string>();

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === "Enter" && this.filterCard.text.length > 0) {
      this.filter(this.filterCard.text);
     }
  }  

  constructor() { }

  ngOnInit() {
  }

  filter(text) {
    this.onCardFilter.emit(text);
    this.filterCard.text = '';
  }

  public filterCard: any = {text: ''};
}
