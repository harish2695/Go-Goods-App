import mongoose from 'mongoose'

const albumSchema =  new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    artist: String,
    totalSongs: String,
    songs:[]
})

export default mongoose.model('Alien',albumSchema)