import mongoose from "mongoose"

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (!process.env.MONGO_URI) {
        // throw new Error('Please define the MONGO_URI environment variable inside .env.local')
        return console.log('MongoDB not connected');
    }
    if (isConnected) {
        // console.log('Already connected to MongoDB')
        return console.log('Already connected to MongoDB');
                
    }
    try {
        await mongoose.connect(process.env.MONGO_URI);
        isConnected = true
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error)
    }



}

