import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisteredDevicesPageRoutingModule } from './registered-devices-routing.module';

import { RegisteredDevicesPage } from './registered-devices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisteredDevicesPageRoutingModule
  ],
  declarations: [RegisteredDevicesPage]
})
export class RegisteredDevicesPageModule {}
