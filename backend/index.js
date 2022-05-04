import express from 'express';
import cors from 'cors';
import db from './config/db.js';
import router from './routes/index.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

//connect to the database
db.connect((err) => {
    if(err) throw err;
    console.log("Connected to the database");
});

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//jalankan route
app.use('/', router);

//listen
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})