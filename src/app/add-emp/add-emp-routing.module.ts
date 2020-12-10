import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEmpPage } from './add-emp.page';

const routes: Routes = [
  {
    path: '',
    component: AddEmpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEmpPageRoutingModule {}
