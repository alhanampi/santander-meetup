import mongoose from 'mongoose'

const WeatherSchema = new mongoose.Schema({
    // could be added later
    // city: {
    //     type: String,
    //     required: true,
    //     default: 'Buenos Aires'
    // },
    date: {
        type: Date,
        required: true
    }
})

export default mongoose.model("Weather", WeatherSchema)