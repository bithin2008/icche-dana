import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParentalCtrlPageRoutingModule } from './parental-ctrl-routing.module';

import { ParentalCtrlPage } from './parental-ctrl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParentalCtrlPageRoutingModule
  ],
  declarations: [ParentalCtrlPage]
})
export class ParentalCtrlPageModule {}
