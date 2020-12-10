import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.page.html',
  styleUrls: ['./emp-details.page.scss'],
})
export class EmpDetailsPage implements OnInit {

  empDetails:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(extras => {
      console.log(extras);
      this.empDetails = extras;
   });
  }

}
