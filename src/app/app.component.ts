import { Component } from '@angular/core';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  displayDetails: boolean = false;
  logButtonClicks = [];

  onDisplayDetails(){

    this.displayDetails = !this.displayDetails;
    // push a timestamp of the button click into the array
    this.logButtonClicks.push((new Date).toLocaleTimeString());
  }
}
