import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoledipaneRoutingModule } from './favoledipane-routing.module';
import { IndexComponent } from './index/index.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, FavoledipaneRoutingModule, FontAwesomeModule]
})
export class FavoledipaneModule {}
