import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonIntlTelInputModule } from 'ion-intl-tel-input';
import { IonicModule } from '@ionic/angular';
import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonIntlTelInputModule,
    ReactiveFormsModule,
    IonicModule,
    RegisterPageRoutingModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule { }
