import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { ArticleApiService } from '../article-api.service';

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

  constructor(private route: ActivatedRoute, private articleService: ArticleApiService) { }

  ngOnInit() {
    this.route.paramMap
    .pipe(
      map(paramMap => paramMap.get('keyword')),
      switchMap(keyword => this.articleService.getArticles())
    )
    .subscribe(articles => {
      // const keyword = paramMap.get('keyword');
      // console.log(keyword);
      console.log(articles);
    });

    // this.route.queryParamMap.subscribe(queryParamMap => {
    //   console.log(queryParamMap.get('keyword'));
    // });
  }

}
