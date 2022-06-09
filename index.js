require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./routes/userRoute');
const authRouter = require('./routes/authRoute');
const connectToDB = require('./config/db');
const cookieParser = require('cookie-parser');




// middlewares
app.use(express.json());
app.use(cookieParser());

// Connecting to the DB
connectToDB();

// routes
app.use('/api/v1/user', userRouter);
app.use('/api/v1/auth', authRouter);


app.listen(process.env.PORT, () => {
    console.log("Server is running successfully...");
})