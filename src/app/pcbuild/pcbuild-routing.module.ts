import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PcbuildPage } from './pcbuild.page';

const routes: Routes = [
  {
    path: '',
    component: PcbuildPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PcbuildPageRoutingModule {}
