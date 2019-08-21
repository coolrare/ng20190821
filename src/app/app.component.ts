import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '聯合大學';
  imageWidth = 100;

  imageResize(event: MouseEvent) {
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
