const mongoose=require('mongoose');
const joi=require('joi')

const AdminSchema=new mongoose.Schema({
    targetUrl:{
        type:String
    }
})

const Admin=mongoose.model("Admin",AdminSchema)

const validateLink=(link)=>{
    let schema=joi.object({
        targetUrl:joi.string().required()
    })

    return schema.validate(link)
}

module.exports={
    Admin,
    validateLink
}