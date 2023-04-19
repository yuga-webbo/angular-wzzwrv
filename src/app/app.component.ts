import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionService } from './question.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  questions$: Observable<any[]>;

  constructor(private questionService: QuestionService) {

  }

  ngOnInit() {
    console.log('onInit');
    this.questions$ = this.questionService.fetchQuestions('angular');
  }
}
