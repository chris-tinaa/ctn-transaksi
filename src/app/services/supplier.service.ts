import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISupplier } from '../interfaces/i-supplier';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  private apiUrl = environment.baseURL + '/suppliers'; // Ganti dengan URL API sebenarnya jika digunakan

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNocmlzdGluYUBnbWFpbC5jb20iLCJ1c2VySWQiOiI2NTEwZWU4M2IzYTk5Njk4MjNmODhhYjgiLCJpYXQiOjE2OTU2MTQ0MzAsImV4cCI6MTcwMjgxNDQzMH0.r7v_wTtbYIlAc45-CdBF0dS5cgToU2H-duUoQ0sX1KQ'
  });

  constructor(private http: HttpClient) {}

  getSuppliers(): Observable<ISupplier[]> {
    return this.http.get<ISupplier[]>(`${this.apiUrl}`, { headers: this.headers });
  }

  // Fungsi untuk mengambil detail supplier berdasarkan ID
  getSupplierById(id: String): Observable<ISupplier> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ISupplier>(url, { headers: this.headers });
  }
}
