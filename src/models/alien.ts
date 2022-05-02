import mongoose from 'mongoose'
import { IAlien } from '../interfaces/IAlien';

const alienSchema =  new mongoose.Schema<IAlien>({

    name:{
        type: String,
        required: true
    },
    tech:{
        type: String,
        required: true
    },
    sub: {
        type: Boolean,
        required: true,
        default: false
    }
})

export default mongoose.model<IAlien>('Alien',alienSchema)