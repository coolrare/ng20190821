import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpArticles } from './http-articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleApiService {
  constructor(private httpClient: HttpClient) {}

  getArticles() {
    return this.httpClient.get<HttpArticles>('http://localhost:3000/api/articles');
  }
}
