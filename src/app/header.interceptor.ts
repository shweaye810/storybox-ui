import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {

  }
  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    console.log("HeaderInterceptor>this.authService", this.authService)

    let token = this.authService.token;
    console.log("HeaderInterceptor>if (this.authService)>token", token)

    if (token) {
      req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
    }

    if (!req.headers.has('Content-Type')) {
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }

    console.log("HeaderInterceptor>intercept", req)

    return next.handle(req);
  }

}
