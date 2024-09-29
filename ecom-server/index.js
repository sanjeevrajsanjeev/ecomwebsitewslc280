let express=require("express")
let app=express();
let cors=require("cors");
require("dotenv").config()
let mongoose=require('mongoose');
const { mainRoute } = require("./app/mainroute");

app.use(cors())
app.use(express.json())
app.use(mainRoute)


mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DBNAME}`)
.then((res)=>{
    app.listen(process.env.SERVERPORT)
    console.log(process.env.SERVERPORT,process.env.DBNAME)
})
