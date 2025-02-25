//server.js
const express=require('express');
const mongoose=require('mongoose');

const app=express();
require('dotenv').config();

const authRoutes=require('./routes/authRoutes')
const userRoutes=require('./routes/userRoutes');
const classRoutes=require('./routes/classRoutes');

app.use(express.json());
mongoose.connect(process.env.MONGO_URI).then(()=>console.log('MongoDB Connected'))
.catch(err=>console.error("MongoDB Connection Error:", err));;

app.use('/auth',authRoutes);
app.use('/classes', classRoutes);
app.use('/users', userRoutes);



app.listen('8080',()=>console.log('Server Running on Port 8080'));
