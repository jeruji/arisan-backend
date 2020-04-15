import * as mongoose from 'mongoose';

export const ArisanSchema = new mongoose.Schema({
    durasiPenarikan: Number,
    durasiPembayaran: Number,
    pembayaran: Number,
    status: { type: Number, default: 0 },
    created: { type: Date, default: Date.now }
})