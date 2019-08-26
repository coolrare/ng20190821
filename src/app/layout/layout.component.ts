import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { HttpClient } from '@angular/common/http';
import { ArticleApiService } from '../article-api.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  title = '聯合大學';
  imageWidth = 100;
  display = true;

  isHighlight = false;
  fontSize = 30;

  money = 10000;

  list = ['A', 'B', 'C', 'D'];



  page = '';

  constructor(private httpClient: HttpClient, private articleApiService: ArticleApiService) {}

  ngOnInit() {
    // this.httpClient
    //   .get<HttpArticles>('http://localhost:3000/api/articles')
    //   .subscribe(data => {
    //     console.log('1');
    //     console.log(data);
    //     this.articles = data.articles;
    //   });

    this.articleApiService.getArticles().subscribe(data => {
      this.articles = data.articles;
    });
  }

  imageResize(event: MouseEvent) {
    this.isHighlight = !this.isHighlight;
    this.fontSize += 2;
    this.display = !this.display;

    // this.list.push('E');
    this.list = [...this.list, 'E'];

    // let arr = [];
    // for(let i = 0;i<=this.list.length; +=i){
    //   arr.push(this.list[i]);
    // }
    // this.list = arr;

    console.log(this.list);

    console.log(event);
    if (event.ctrlKey) {
      this.imageWidth += 50;
    }
  }

  changeTitle(event: any) {
    console.log(event.target.value);
    this.title = event.target.value;
  }

  filterArticles(keyword: string) {
    console.log(keyword);
    // this.articles = this.articles.filter(item => item.title.indexOf(keyword) !== -1);
  }
}
