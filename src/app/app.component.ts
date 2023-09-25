import { Component, OnInit } from '@angular/core';
import { TransaksiService } from './services/transaksi.service';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Transaksi } from './models/transaksi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  listTransaksi: Transaksi[];

  constructor(
    private transaksiService: TransaksiService
  ) {
    this.listTransaksi = [];
  }

  ngOnInit(): void {
    this.transaksiService.getBarangIn().pipe(catchError(this.handleError)).subscribe((
      resp: any) => {
      this.listTransaksi = resp;
      // console.log(this.listTransaksi);
    });
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
}
