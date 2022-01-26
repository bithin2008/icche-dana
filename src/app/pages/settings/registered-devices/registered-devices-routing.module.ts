import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisteredDevicesPage } from './registered-devices.page';

const routes: Routes = [
  {
    path: '',
    component: RegisteredDevicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisteredDevicesPageRoutingModule {}
