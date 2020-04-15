import { Document } from 'mongoose';

export interface Arisandetail extends Document {
    readonly arisanId: String
    readonly fullname: String
    readonly email: String
    readonly phone: String
    readonly isCreator: Boolean
    readonly created: Date
}