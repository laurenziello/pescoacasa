import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoledipaneRoutingModule } from './favoledipane-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    FavoledipaneRoutingModule
  ]
})
export class FavoledipaneModule { }
