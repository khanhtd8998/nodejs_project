import mongoose from 'mongoose';
import { DB_URI } from './env.js';

export default async function connect() {
    try {
        //mongodb://127.0.0.1:27017/db_name
        await mongoose.connect(DB_URI);
        console.log("Connect successfully!!!");
    } catch (error) {
        console.log("Connect failed!!!");
    }
}