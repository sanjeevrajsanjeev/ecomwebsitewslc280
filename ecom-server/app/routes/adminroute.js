let express=require("express")
const { categoryroutes } = require("./admin/categoryroutes")
const { sizeRoutes } = require("./admin/sizeroutes")
let adminRouteRoutes=express.Router()

adminRouteRoutes.use("/category",categoryroutes)
sizeRoutes.use("/size",sizeRoutes)


module.exports={adminRouteRoutes}