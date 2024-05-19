import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout.component';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
