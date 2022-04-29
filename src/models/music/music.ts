import mongoose from 'mongoose'

const musicSchema =  new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    artist: String,
    length: String,
    album:{type:mongoose.Schema.Types.ObjectId,ref:'Album'}
})

export default mongoose.model('Music',musicSchema)