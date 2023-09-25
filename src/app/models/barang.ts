import { IBarang } from '../interfaces/i-barang';

export class Barang implements IBarang {
    _id?: String | undefined = "";
    namaBarang: String = "";
    deskripsi: String = "";
    harga: number = 0;
}
