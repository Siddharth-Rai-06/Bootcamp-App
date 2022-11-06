const express=require("express");
const dotenv=require("dotenv");
// const logger=require("./middleware/logger")
const morgan=require("morgan");
//import routes files
const bootcamps = require("./routes/bootcamps")

dotenv.config({path: "./config/config.env"});

const app=express();
//Dev logging middleware
if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'));
}
// mount the routes to apis
app.use("/api/v1/bootcamps", bootcamps)

 
const PORT=process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
});