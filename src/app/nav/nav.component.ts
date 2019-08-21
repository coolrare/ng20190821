import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output()
  search = new EventEmitter();

  keyword = '';

  constructor() { }

  ngOnInit() {
  }

  doSearch() {
    console.log(this.keyword);
    this.search.emit(this.keyword);
  }

}
