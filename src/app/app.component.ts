import { Component } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '聯合大學';
  imageWidth = 100;
  display = true;

  isHighlight = false;
  fontSize = 30;

  money = 10000;

  list = ['A', 'B', 'C', 'D'];

  topTitle = 'Test';
  bottomTitle = 'Test2';

  articles: Article[] = [
    {
      title: 'Test 1',
      description: 'test 1'
    },
    {
      title: 'Test 2',
      description: 'test2'
    }
  ];


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
    this.articles = this.articles.filter(item => item.title.indexOf(keyword) !== -1);
  }
}
