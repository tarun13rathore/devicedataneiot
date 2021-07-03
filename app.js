const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const dataInfo = require('./models/deviceinfo')
app.set('view engine','ejs') 
app.set('views','views')
app.use(express.static("public"));
//dotenv.config({path:'./config.env'});
require("dotenv").config({path: "config.env"})
const DB = process.env.DATABASE;

const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: false})) //Post Body Parser
//mongoose.connect("mongodb://127.0.0.1:27017/devicedata",{useNewUrlParser: true,useUnifiedTopology: true})
mongoose.connect(DB,{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>console.log("connect database"))
.catch(err => console.log(err))


//important
// dataInfo.find({},(err,results)=>{
//     if(err) throw err;
//     console.log(results);
// })




app.get('/',(req,res)=>{
    res.render('index')
})


//dashboard req 
app.get('/dashboard',(req,res)=>{
    res.render('dashboard')
})




//get method
app.get('/saveData',(req,res)=>{
    const deviceDeatils = new dataInfo({
       deviceid: req.query.deviceid,
       batteryvolt: req.query.batteryvolt,
       solarvolt: req.query.solarvolt
       
    })
    //console.log(deviceDeatils);
    deviceDeatils.save()
    res.status(200).send({msg: "save data success",Control_status:"ABCDEFGH"})
    //res.redirect('index')
   })

////


app.get('/showdata',(req,res)=>{
    //res.render('results')
    dataInfo.find({},(err,results)=>{
        if(err) throw err;
    //    console.log(results);
        res.render('results',{
            deviceList: results
        })
    })
})


//indiviual data show in dashboard
app.get('/indiv',(req,res)=>{
    dataInfo.findOne({},
        (err, data1) =>{
        if(err) throw err;
        console.log(data1);
        res.render('data1')
    })
})


app.listen(PORT,() =>{
    console.log(`server is running port no ${PORT}`)
})