import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  rows = [
    {
      "name": "Ethel Price",
      "email": "ethel@gmail.com",
      "phone": 8545127890,
      "address":"test"
    },
    {
      "name": "Tom",
      "email": "tom@gmail.com",
      "phone": 9955447412,
      "address":"test"
    },
    {
      "name": "Jenny",
      "email": "jenny@gmail.com",
      "phone": 7545851023,
      "address":"test"
    },
    {
      "name": "Mike",
      "email": "mike@gmail.com",
      "phone": 8899401278,
      "address":"test"
    }
  ];
  
  constructor(private router:Router, private nav:NavController) {}

  addEmp(){
    console.log("navigate")
    this.router.navigate(['/add-emp'])
  }

  empDetails(empData){
    console.log("EmpDetails..",empData)
    //this.router.navigate(['/emp-details',{empData:empData}])
    this.router.navigate(['/emp-details', empData]);

  }

}
