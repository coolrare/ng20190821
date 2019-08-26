import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  createPost() {
    const data = {
      article: {
        title: 'How to train your dragon',
        description: 'Ever wonder how?',
        body: 'You have to believe',
        tagList: ['reactjs', 'angularjs', 'dragons']
      }
    };

    this.httpClient.post('http://localhost:3000/api/articles', data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`
      }
    }).subscribe();
  }
}
