import * as mongoose from 'mongoose';

export const ArisandetailSchema = new mongoose.Schema({
    arisanId: String, 
    fullname: String,
    email: String,
    phone: String,
    isCreator: Boolean,
    created: { type: Date, default: Date.now }
})