import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DasboardComponent } from './dasboard.component';
import { TodayComponent } from './today/today.component';



@NgModule({
  declarations: [DasboardComponent , TodayComponent],
  imports: [
    CommonModule
  ]
})
export class DasboardModule { }
