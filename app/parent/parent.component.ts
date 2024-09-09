import { Component, OnInit } from '@angular/core';

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  parentMessage: string = 'Hello from Parent Component!';

  value1:string=''
  message: any;
  inputData: string = '';
  receivedMessage: any;
  selectedCity: any;
  displayData:string =''
  constructor() {}

  ngOnInit(): void {}

  data() {
    this.displayData = this.inputData
  }

  handleMessage(event: any) {
    this.receivedMessage = event;
    console.log('Data', this.receivedMessage);
  }

  handleCity(city: City) {
    debugger;
    if (typeof city === 'string') {
      this.selectedCity = city;
    } else {
      this.selectedCity = city.name;
    }
  }
}
