import { Component, OnInit } from '@angular/core';
import { Article } from './article';
import { HttpClient } from '@angular/common/http';
import { HttpArticles } from './http-articles';
import { ArticleApiService } from './article-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
