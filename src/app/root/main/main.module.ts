import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { IndexComponent } from './index/index.component';
import { MainService } from 'src/app/services/main.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, MainRoutingModule, FontAwesomeModule],
  providers: [MainService]
})
export class MainModule {}
