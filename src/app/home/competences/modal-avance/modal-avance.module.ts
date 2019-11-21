import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAvancePageRoutingModule } from './modal-avance-routing.module';

import { ModalAvancePage } from './modal-avance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAvancePageRoutingModule
  ],
  declarations: [ModalAvancePage]
})
export class ModalAvancePageModule {}
