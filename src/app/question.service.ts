import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class QuestionService {

  constructor(private http: HttpClient) { }

  fetchQuestions(topic: string): Observable<any[]> {
    const params = new HttpParams().append('intitle', topic);

    return this.http.get<any[]>("https://api.stackexchange.com/2.2/search", { params });
  }
}
