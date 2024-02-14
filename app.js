const express=require('express')
const parser=require('body-parser')
const taskrouter=require('./Routes/taskroutes')
const mongoose=require('mongoose')

const app=express()
const url="mongodb+srv://Goo:Goo555@goo.xz09sqn.mongodb.net/Goo"

app.use(parser.json())
 
const ConnectDB=async ()=>{
    try{
        mongoose.connect(url)
        console.log("Coneccted to mongo DB")
       
    }catch(err){
        console.log("Coneccting with mongodb failed"+err)
        process.exit()
    }
}

ConnectDB()
app.use(taskrouter)

app.listen(8000)
console.log("server is running")