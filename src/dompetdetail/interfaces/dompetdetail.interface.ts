import { Document } from 'mongoose';

export interface Dompetdetail extends Document {
    readonly dompetId: String
    readonly fullname: String
    readonly email: String
    readonly phone: String
    readonly isCreator: Boolean
    readonly created: Date
}