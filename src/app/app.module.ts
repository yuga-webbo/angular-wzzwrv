import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuestionInterceptor } from './question.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuestionService } from './question.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    QuestionService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: QuestionInterceptor,
      multi: true,
    }  
  ]
})
export class AppModule { }
