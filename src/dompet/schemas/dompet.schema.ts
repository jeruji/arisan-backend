import * as mongoose from 'mongoose';

export const DompetSchema = new mongoose.Schema({
    pemilikRekening: String,
    namaBank: String,
    nomorRekening: String,
    kantorCabang: String,
    pembayaran: Number,
    isFinish: Boolean,
    description: String,
    imgRekeningLocation: String,
    created: { type: Date, default: Date.now },
    dompetdetails: []
})