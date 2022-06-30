/* CUSTOM IMPORTS */
const mongoose = require("mongoose")
const Schema = mongoose.Schema




const VideoSchema = new Schema({
    imgUrl: {
        type: String,
        trim: true,
        required: [true, 'Image URL required'],
    },
    previewUrl: {
        type: String,
        trim: true,
        required: [true, 'Preview URL required'],
    },
    videoUrl: {
        type: String,
        trim: true,
        required: [true, 'Video URL required'],
    },


})

let Video = mongoose.model('videos', VideoSchema)
module.exports = Video
