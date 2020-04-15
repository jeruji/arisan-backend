import { Document } from 'mongoose';
import { Dompetdetail } from 'src/dompetdetail/interfaces/dompetdetail.interface';

export interface Dompet extends Document {
    readonly pemilikRekening: String
    readonly namaBank: String
    readonly nomorRekening: String
    readonly kantorCabang: String
    readonly pembayaran: Number
    readonly description: String
    readonly isFinish: Boolean
    readonly imgRekeningLocation: String
    readonly created: Date
    readonly dompetdetails: []
}