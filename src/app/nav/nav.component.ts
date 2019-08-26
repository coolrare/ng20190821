import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output()
  search = new EventEmitter();

  keyword = '';

  isNewPost = true;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  doSearch() {
    console.log(this.keyword);
    this.search.emit(this.keyword);
    this.router.navigate(['/posts', this.keyword], {
      queryParams: {
        foo: 'bar',
        keyword: this.keyword
      }
    });
    // this.router.navigateByUrl('/' + this.keyword);

    // url => /{{keyowrd}} -> create or login
    // url => /posts/{{keyword}} -> /posts/create
  }
}
