const express=require('express');
const mongoose=require('mongoose');
const app=express();

const authRouter=require('./routes/auth')
const protectedRouter=require('./routes/protectedRouter');
const classRouter=require('./routes/classRoutes');

app.use(express.json());
mongoose.connect('mongodb://localhost:27017/school');

app.use('/auth',authRouter);
app.use('/classes', classRouter);

app.use('/protected', protectedRouter);



app.listen('8080');
