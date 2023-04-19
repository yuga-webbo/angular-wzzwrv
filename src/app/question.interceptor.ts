import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


const pagesize = 10;
const site = "stackoverflow";
const order = "desc";
const sort = "activity";

@Injectable()
export class QuestionInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);

    const params = req.params
      .append('pagesize', String(pagesize))
      .append('site', site)
      .append('order', order)
      .append('sort', sort)

    const cloneReq = req.clone({ params });

    return next.handle(cloneReq);
  }
}