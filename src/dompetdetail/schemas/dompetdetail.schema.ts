import * as mongoose from 'mongoose';

export const DompetdetailSchema = new mongoose.Schema({
    dompetId: String, 
    fullname: String,
    email: String,
    phone: String,
    paid: { type: Boolean, default: false },
    isCreator: Boolean,
    created: { type: Date, default: Date.now }
})