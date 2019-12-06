import { Injectable } from '@angular/core';
import { Http } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid= '';
  private clientsecret= '';


  constructor(private http: Http) { 
    console.log("Service is now ready");
    this.username = 'Brian-M-Code'
  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username+ "?client_id" + this.clientid + "&client_secret=" +this.clientsecret)
    .map(res => res.json());
  }
}
