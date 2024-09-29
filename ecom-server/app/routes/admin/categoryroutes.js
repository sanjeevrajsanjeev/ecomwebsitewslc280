let express=require("express")
const { categoryInsert } = require("../../controller/admin/categorycontroller")
const { uploads } = require("../../middleware/fileuploadation")
let categoryRoutes=express.Router();



categoryRoutes.post('/insert',uploads('uploads/category').single('categoryImage'),categoryInsert)


module.exports={categoryRoutes}