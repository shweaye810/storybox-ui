import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string = null;
  private authURL: string = "http://localhost:8765/api/oauth"
  private json: {};
  private username: string;

  constructor(private http: HttpClient, private router: Router) {
  }

  isValid(token: string) {
    return false;
  }
  postToken(username: string, password: string): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic c3Rvcnlib3g6c3Rvcnlib3gtc3VwZXItc2VjdXJl'
      })
    };
    return this.http.post<any>(this.authURL + "/token",
      `grant_type=password&username=${username}&password=${password}`,
      httpOptions);
  }
  login(username: string, password: string): void {
    if (!this.isValid(this.token)) {
      this.postToken(username, password).subscribe(json => {
        this.json = json;
        this.token = json.access_token
        this.username = username;

      })
    }

  }

}
