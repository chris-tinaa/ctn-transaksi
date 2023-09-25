import { ISupplier } from '../interfaces/i-supplier';
import { Barang } from './barang';
import { ItemBarang } from './itemBarang';

export class Supplier implements ISupplier {
  _id?: String | undefined = "";
  alamat: string = "";
  nama: string = "";
  listBarang: Array<ItemBarang> = [new ItemBarang()];
}
