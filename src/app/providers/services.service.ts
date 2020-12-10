import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(public toastController:ToastController) { }


  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      position:"bottom",
      duration: 2000
    });
    toast.present(); 
  }
}
