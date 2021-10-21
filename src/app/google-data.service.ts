import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GoogleDataService {

  constructor( private http:HttpClient) { }

  getUserData(){
    let apiurl="https://www.googleapis.com/drive/v3/files";
    return this.http.get(apiurl);
  }
}
