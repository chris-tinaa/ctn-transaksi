import { IBarang } from "./i-barang";
import { IItemBarang } from "./i-item-barang";

export interface ISupplier {
    _id?: String;
    alamat?: string;
    nama?: string;
    listBarang?: Array<IItemBarang>
  }
  