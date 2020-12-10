import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEmpPageRoutingModule } from './add-emp-routing.module';

import { AddEmpPage } from './add-emp.page';
// import { Geolocation } from '@ionic-native/geolocation';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddEmpPageRoutingModule
  ],
  providers:[
    Geolocation,
    NativeGeocoder,
  ],
  declarations: [AddEmpPage]
})
export class AddEmpPageModule {}
