import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { NavController } from '@ionic/angular';
import { ServicesService } from '../providers/services.service';
//import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.page.html',
  styleUrls: ['./add-emp.page.scss'],
})
export class AddEmpPage implements OnInit {

  addEmpForm: FormGroup;
  submitted = false;

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  
    // Readable Address
    address: string;

    // Location coordinates
    latitude: number;
    longitude: number;
    accuracy: number;
  
    //Geocoder configuration
    geoencoderOptions: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    }

  constructor(private fb:FormBuilder,  private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder, private service:ServicesService, private nav:NavController) {

    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("MAp response..",resp)
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });

   }

  ngOnInit() {
    this.addEmpForm = this.fb.group({
      fullName: ["", [Validators.required]],
      email:["",[Validators.required,Validators.email]],
      phoneNo:["",[Validators.required]]
    })
  }


  //Get current coordinates of device
  getGeolocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("MAP Response-",resp);

      this.latitude =resp['coords']['latitude']
      this.longitude = resp['coords']['longitude'];
      this.accuracy = resp['coords']['accuracy'];

      this.getGeoencoder(this.latitude,this.longitude);

    }).catch((error) => {
      alert('Error getting location' + JSON.stringify(error));
    });
  }
  getGeoencoder(latitude, longitude) {
    this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: NativeGeocoderResult[]) => {
        this.address = this.generateAddress(result[0]);
      })
      .catch((error: any) => {
        alert('Error getting location' + JSON.stringify(error));
      });
  }
   //Return Comma saperated address
   generateAddress(addressObj) {
    let obj = [];
    let address = "";
    for (let key in addressObj) {
      obj.push(addressObj[key]);
    }
    obj.reverse();
    for (let val in obj) {
      if (obj[val].length)
        address += obj[val] + ', ';
    }
    return address.slice(0, -2);
  }


  get f() {
    return this.addEmpForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.addEmpForm.invalid) {
      console.log("Form Invalid..")
      return;
    } else {
        this.service.presentToast("Employee Added Succesfully");
        setTimeout(() => {
          this.nav.navigateBack('/home');
        }, 3000)
    }
  }
  
 

}
