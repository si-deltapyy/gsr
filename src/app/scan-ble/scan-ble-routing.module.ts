import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanBlePage } from './scan-ble.page';

const routes: Routes = [
  {
    path: '',
    component: ScanBlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanBlePageRoutingModule {}
