import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActorProfilePageRoutingModule } from './actor-profile-routing.module';

import { ActorProfilePage } from './actor-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActorProfilePageRoutingModule
  ],
  declarations: [ActorProfilePage]
})
export class ActorProfilePageModule {}
