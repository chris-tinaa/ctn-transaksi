import { ITransaksi } from "../interfaces/i-transaksi";
import { Supplier } from "./supplier";

export class Transaksi implements ITransaksi {
  _id: String | undefined = "";
  tanggal: String = "";
  grandTotal: number = 0;
  supplier: Array<Supplier> = [new Supplier()];
  __v: number = 0
}