import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
import { NewPostComponent } from './new-post/new-post.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: 'posts/:keyword',
    component: PostsComponent
  },
  {
    path: 'create',
    canActivate: [AuthGuard],
    component: NewPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
