import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StreamOptionsPageRoutingModule } from './stream-options-routing.module';

import { StreamOptionsPage } from './stream-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StreamOptionsPageRoutingModule
  ],
  declarations: [StreamOptionsPage]
})
export class StreamOptionsPageModule {}
