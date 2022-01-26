import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StreamOptionsPage } from './stream-options.page';

const routes: Routes = [
  {
    path: '',
    component: StreamOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StreamOptionsPageRoutingModule {}
