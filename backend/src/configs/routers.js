require("express-async-errors");

const admin=require("../routers/admin")

const error=require("../middleware/error")

const routers=(app)=>{
    app.use("/",admin)

    app.use(error)
}

module.exports=routers