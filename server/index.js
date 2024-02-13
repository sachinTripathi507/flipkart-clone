import express from 'express';
import { Connection } from './database/db.js';
import dotenv from 'dotenv'
import DefaultData from './default.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/route.js'


const app= express();
dotenv.config();
app.use(cors());

app.use(express.json());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router);

const username= process.env.db_user;
const password= process.env.db_password;
Connection(username,password);
app.listen(8000,()=>{
console.log('server started');
});
// DefaultData();