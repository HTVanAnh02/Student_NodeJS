import mongoose, { Schema } from "mongoose";

const studentSchema=new Schema({
    firstname:String,
    lastname:String,
    age:Number
},{ timestamps: true})

export const Student=mongoose.model('Student',studentSchema);