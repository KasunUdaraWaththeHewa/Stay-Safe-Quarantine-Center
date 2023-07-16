const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT=process.env.PORT || 8070;
app.use(cors());
app.use(bodyParser.json());

const URL=process.env.MONGODB_URL;
mongoose.connect(URL,{
    //useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    //useFindAndModify:false
});
const connection=mongoose.connection;
connection.once("open",()=>{
    console.log("MongoDB Connection Success!");
})

const patientRouter=require("./routes/patients.js");
app.use("/patient",patientRouter);
const doctorRouter=require("./routes/doctors.js");
app.use("/doctor",doctorRouter);
const nurseRouter=require("./routes/nurses.js");
app.use("/nurse",nurseRouter);
const staffRouter=require("./routes/staffs.js");
app.use("/staff",staffRouter);


app.listen(PORT,()=>{
    console.log(`Server is up and running on port: ${PORT}`);
})