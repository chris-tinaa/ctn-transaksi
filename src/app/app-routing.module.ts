import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransaksiComponent } from './transaksi/transaksi.component';

const routes: Routes = [
  {
    path: '',
    component: TransaksiComponent
  },
  {
    path: 'new-transaksi',
    component: TransaksiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
