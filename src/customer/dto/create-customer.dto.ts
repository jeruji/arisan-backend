export class CreateCustomerDTO {
    readonly firebaseId: string
    readonly fullname: string
    readonly email: string
    readonly address: string
    readonly phone: string
    readonly dob: Date
    readonly occupation: string
    readonly workAddress: string
    readonly workPhone: string
    readonly status: Number
    readonly salary: Number
    readonly sibFullname: string
    readonly sibAddress: string
    readonly sibPhone: string
    readonly sibDob: string
    readonly ktpFile: string
    readonly kkFile: string
    readonly bukuRekeningFile: string
    readonly rekeningKoranFile: string
    readonly created: Date
}