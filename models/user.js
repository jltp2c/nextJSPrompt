import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    email : {
        type : String,
        unique : [true, 'Email is already exists'],
        required : [true, 'Email is required'],
    }
})