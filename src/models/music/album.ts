import mongoose from 'mongoose'

const albumSchema =  new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    artist: String,
    totalSongs: String,
    songs:[{type:mongoose.Schema.Types.ObjectId, ref:"Music"}],
    price: String
})

export default mongoose.model('Album',albumSchema)