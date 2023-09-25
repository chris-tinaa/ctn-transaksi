import { IItemBarang } from '../interfaces/i-item-barang';

export class ItemBarang implements IItemBarang {
    id: number | undefined = 0;
    namaBarang: String = "";
    deskripsi: String = "";
    harga: number = 0;
    stok: number = 0;
    qty: number = 1;
    subtotal: number = 0;
}
