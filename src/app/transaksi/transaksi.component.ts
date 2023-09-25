import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../services/supplier.service';
import { Supplier } from '../models/supplier';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { TransaksiService } from '../services/transaksi.service';
import { Transaksi } from '../models/transaksi';
import { ISupplier } from '../interfaces/i-supplier';
import { ItemBarang } from '../models/itemBarang';
import { Barang } from '../models/barang';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.component.html',
  styleUrls: ['./transaksi.component.css']
})
export class TransaksiComponent implements OnInit {

  supplierId: String;
  listSupplier: Supplier[];
  listTransaksi: Transaksi[];
  supplier: Supplier;
  listKeranjang: ItemBarang[];
  grandTotal: number;
  currentDate: String;

  constructor(
    private supplierService: SupplierService,
    private transaksiService: TransaksiService
  ) {
    this.listSupplier = []
    this.listTransaksi = []
    this.supplier = new Supplier()
    this.listKeranjang = []
    this.grandTotal = 0;
    this.supplierId = "6510f9b942c7f2d12758271d";

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    this.currentDate = `${year}-${month}-${day}`;  
  }

  ngOnInit(): void {
    this.supplierService.getSuppliers().pipe(catchError(this.handleError)).subscribe((
      resp: any) => {
      this.listSupplier = resp;
      // console.log(this.listSupplier);
    });

    this.transaksiService.getBarangIn().pipe(catchError(this.handleError)).subscribe((
      resp: any) => {
      this.listTransaksi = resp;
      // console.log(this.listTransaksi);
    });
  }

  getSupplierDetail(): void {
    this.supplierService.getSupplierById(this.supplierId).pipe(catchError(this.handleError)).subscribe((
      resp: any) => {
      this.supplier = resp;
      console.log(this.supplier);
    });
  }

  addtoKeranjang(itemBarang: ItemBarang): void {
    this.listKeranjang.push(itemBarang);
    this.updateGrandTotal()
  }

  deleteFromKeranjang(itemBarang: ItemBarang): void {
    this.listKeranjang = this.listKeranjang.filter(item => item !== itemBarang);
  }

  public handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  updateGrandTotal() {
    this.grandTotal = this.listKeranjang.reduce((total, item) => {
      return total + item.subtotal;
    }, 0);
  }

  simpanTransaksi() {
    
  }

}
