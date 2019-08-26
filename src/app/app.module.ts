import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { MyLowerCasePipe } from './my-lower-case.pipe';
import { BannerComponent } from './posts/banner/banner.component';
import { ArticlesComponent } from './posts/articles/articles.component';
import { TagsComponent } from './posts/tags/tags.component';
import { NavComponent } from './nav/nav.component';

import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { NewPostComponent } from './posts/new-post/new-post.component';
import { PostsComponent } from './posts/posts.component';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    AppComponent,
    MyLowerCasePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
