import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
    firebaseId: String,
    fullname: String,
    email: String,
    address: String,
    phone: String,
    dob: Date,
    occupation: String,
    workAddress: String,
    workPhone: String,
    status: Number,
    salary: Number,
    sibFullname: String,
    sibAddress: String,
    sibPhone: String,
    sibDob: String,
    ktpFile: String,
    kkFile: String,
    bukuRekeningFile: String,
    rekeningKoranFile: String,
    created: { type: Date, default: Date.now }
})