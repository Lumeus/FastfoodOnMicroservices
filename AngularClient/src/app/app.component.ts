import { Component } from '@angular/core';
import {User} from "./model/user";
import {DataService} from "./service/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'AngularClient';

  constructor(private data: DataService) {
  }
}
