import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { BLE } from '@ionic-native/ble/ngx';

import { ScanBlePageRoutingModule } from './scan-ble-routing.module';

import { ScanBlePage } from './scan-ble.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanBlePageRoutingModule
  ],
  declarations: [ScanBlePage],
  providers: [
    BLE
  ]

})
export class ScanBlePageModule {}
