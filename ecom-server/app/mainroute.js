let express=require("express");
const { adminRouteRoutes } = require("./routes/adminroute");
let mainRoute=express.Router();
mainRoute.use("/admin",adminRouteRoutes)

module.exports={mainRoute}