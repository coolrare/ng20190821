import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { BannerComponent } from './banner/banner.component';
import { TagsComponent } from './tags/tags.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ArticlesComponent } from './articles/articles.component';


@NgModule({
  declarations: [
    PostsComponent,
    BannerComponent,
    ArticlesComponent,
    TagsComponent,
    NewPostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
