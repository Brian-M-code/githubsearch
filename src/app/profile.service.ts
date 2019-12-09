import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid= 'e550c1b2459ac85e1ecc';
  private clientsecret= '9f52db05aa2c8513dfe27de82f36d4addcaf8c81';

  constructor(private http:HttpClient) { 
      this.username = "Brian-M-Code";
    }
    getProfileInfo(){
      return this.http.get("https://api.github.com/users/" + this.username + "?client_id="+ this.clientid + "&client_secret=" + this.clientsecret)
    }
  
    getProfileRepos(){
      return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ this.clientid + "&client_secret=" + this.clientsecret)
    }
    updateProfile(username:string){
      this.username = username;
    }
  }
  


  // constructor(private http: HttpClient) { 
  //   console.log("Service is now ready");
  //   this.username = 'Brian-M-Code'
  // }

  // getProfileInfo(){
  //   return this.http.get("https://api.github.com/users/" + this.username).pipe(map(res => res));
    

