import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '聯合大學';
  imageWidth = 100;
  display = true;

  list = ['A', 'B', 'C', 'D'];

  imageResize(event: MouseEvent) {

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

  changeTitle(event) {
    console.log(event.target.value);
    this.title = event.target.value;
  }
}
