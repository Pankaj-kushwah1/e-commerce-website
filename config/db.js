import mongoose  from "mongoose";

import colors from 'colors'


const connectDB = async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
        console.log(`Mongodb Connected ${mongoose.connection.host}`.bgBlue.white)
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;




