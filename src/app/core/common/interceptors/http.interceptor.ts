import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authRequest = this.mutateRequest(req);
    return next.handle(authRequest);
  }

  private mutateRequest(req: HttpRequest<any>) {
    const BASE_URL = environment.API_URL;
    return req.clone({
      url: `${BASE_URL}${req.url}`,
      headers: req.headers.set('X-API-KEY', environment.X_API_KEY),
    });
  }

}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
