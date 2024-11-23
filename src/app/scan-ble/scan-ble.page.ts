import { Component, NgZone, OnInit } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';

@Component({
  selector: 'app-scan-ble',
  templateUrl: './scan-ble.page.html',
  styleUrls: ['./scan-ble.page.scss'],
})
export class ScanBlePage implements OnInit {

  devices:any[] = [];

  constructor(private ble:BLE, private ngZone: NgZone) { }

  ngOnInit() {
  }

  Scan(){
    this.devices = [];
    this.ble.scan([],15).subscribe(
      device => this.onDeviceDiscovered(device)
    );
  }

  onDeviceDiscovered(device){
    console.log('Discovered' + JSON.stringify(device,null,2));
    this.ngZone.run(()=>{
      this.devices.push(device)
      console.log(device)
    })
  }

}
