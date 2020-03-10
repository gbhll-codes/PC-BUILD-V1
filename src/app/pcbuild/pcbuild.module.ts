import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PcbuildPageRoutingModule } from './pcbuild-routing.module';

import { PcbuildPage } from './pcbuild.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PcbuildPageRoutingModule
  ],
  declarations: [PcbuildPage]
})
export class PcbuildPageModule {}
