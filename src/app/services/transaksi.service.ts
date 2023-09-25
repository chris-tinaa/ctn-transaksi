import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ITransaksi } from '../interfaces/i-transaksi';

@Injectable({
  providedIn: 'root',
})
export class TransaksiService {
  private apiUrl = environment.baseURL + '/barang-in'; // Ganti dengan URL API sebenarnya jika digunakan

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNocmlzdGluYUBnbWFpbC5jb20iLCJ1c2VySWQiOiI2NTEwZWU4M2IzYTk5Njk4MjNmODhhYjgiLCJpYXQiOjE2OTU2MTQ0MzAsImV4cCI6MTcwMjgxNDQzMH0.r7v_wTtbYIlAc45-CdBF0dS5cgToU2H-duUoQ0sX1KQ'
  });

  constructor(private http: HttpClient) {}

  getBarangIn(): Observable<ITransaksi[]> {
    return this.http.get<ITransaksi[]>(`${this.apiUrl}`, { headers: this.headers });
  }

  createBarangIn(transaksi: ITransaksi): Observable<any> {
    const body = JSON.stringify(transaksi);
    console.log(body)
    return this.http.post<any>(`${this.apiUrl}/`, { headers: this.headers });
  }
}
