import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routers from './Student/studentRouter.js';
import bodyParser from 'body-parser';
dotenv.config();
const port = process.env.PORT || 30000;
const app = express();
app.use(bodyParser.json())
mongoose.connect('mongodb+srv://vanh:56UJVZAuyTUgAra9@cluster0.ds6mjsp.mongodb.net/').then(() => console.log('Kết nối thành công'));
app.use('/student',routers);
app.listen(port, () => {
    console.log('PORT', port);
});
