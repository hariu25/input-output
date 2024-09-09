import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() childMessage!: string;
  @Output() messageEvent = new EventEmitter<string>();
  @Output() cityEvent = new EventEmitter<any>();

  cities: City[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];

  selectedCity1!: City;

  constructor() {}

  ngOnInit(): void {
    console.log('Data', this.cities);
  }

  sendMessage() {
    this.messageEvent.emit('Message is showing');
  }

  sendCity() {
    if (this.selectedCity1) {
      this.cityEvent.emit(this.selectedCity1);
    } else {
      this.cityEvent.emit('no city is there');
      // console.log("no city is there")
    }
  }
}
