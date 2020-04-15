import { Document } from 'mongoose';

export interface Arisan extends Document {
    readonly durasiPenarikan: Number
    readonly durasiPembayaran: Number
    readonly pembayaran: Number
    readonly status: Number
    readonly created: Date
}