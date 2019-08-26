import { Component, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
