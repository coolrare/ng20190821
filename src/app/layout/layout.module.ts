import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavComponent } from '../nav/nav.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LayoutComponent, NavComponent],
  imports: [CommonModule, RouterModule, FormsModule]
})
export class LayoutModule {}
