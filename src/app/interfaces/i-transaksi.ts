import { ISupplier } from "./i-supplier";

export interface ITransaksi {
    _id?: String;
    tanggal?: String;
    grandTotal?: number;
    supplier?: Array<ISupplier>;
    __v?: number;
}
