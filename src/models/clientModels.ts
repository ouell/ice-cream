import { Schema, model } from 'mongoose';

export interface IClient {
    name: string,
    email: string,
    phone: number,
    address: string,
    addressNumber: string,
    addressCity: string,
    addressPostalCode: number,
    birthDate: Date,
    isActive: boolean
}

const ClientSchema = new Schema<IClient>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String
    },
    addressNumber: {
        type: String
    },
    addressCity: {
        type: String
    },
    addressPostalCode: {
        type: Number
    },
    birthDate: {
        type: Date,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    }
})

export const ClientModel = model<IClient>('Client', ClientSchema)