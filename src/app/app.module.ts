import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { MyLowerCasePipe } from './my-lower-case.pipe';
import { BannerComponent } from './banner/banner.component';
import { ArticlesComponent } from './articles/articles.component';
import { TagsComponent } from './tags/tags.component';

@NgModule({
  declarations: [
    AppComponent,
    MyLowerCasePipe,
    BannerComponent,
    ArticlesComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
