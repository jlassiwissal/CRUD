import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Route from "./routes/Route.js";


const app = express();
mongoose.connect("mongodb+srv://adarsh:adarsh@cluster0.zllye.mongodb.net/?retryWrites=true&w=majority",{
    
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(Route);

app.listen(8082, ()=> console.log('Server up and running...'));