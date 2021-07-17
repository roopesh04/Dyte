const express=require('express')
const connect_db=require("./src/configs/mongose_connection")
const routers=require('./src/configs/routers')
const bodyParser=require('body-parser')
const cors =require('cors')

const app=express()
const port=process.env.PORT || 3001

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connect_db()
routers(app)

app.listen(port,()=>{
    console.log("Server is up on the port "+port)
})
