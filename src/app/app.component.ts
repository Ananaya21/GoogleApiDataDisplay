import { Component } from '@angular/core';
import myFile from './myfile.json'
interface USERS {
  kind: String;
  id: String;
  name :  String;
  mimeType : String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'googleApiDataDisplay';

  Users:USERS[]= myFile;
  term:any;
  constructor(){

    console.log(this.Users);
  }

}
