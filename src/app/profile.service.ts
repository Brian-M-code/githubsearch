import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid= ' Iv1.0e11dea2a5fc28ab';
  private clientsecret= '0e8b11728742480935af3ca0ce1254b7e4062aeb';


  constructor(private http: HttpClient) { 
    console.log("Service is now ready");
    this.username = 'Brian-M-Code'
  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username+ "?client_id" + this.clientid + "&client_secret=" +this.clientsecret)
    .map(res => res.json());
  }
}
