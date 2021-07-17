const {
    Admin,
    validateLink
}=require("../models/admin")

const post_data=async (req, res)=>{
    const {error}=validateLink(req.body)
    if(error) throw new Error(error.details[0].message)

    let admin=new Admin(req.body)

    await admin.save()
    res.status(200).send(admin)
}

const get_data=async(req, res)=>{
    const data=await Admin.find()
    res.status(200).send(data)
}

const update_data=async(req,res)=>{
    const {error}=validateLink(req.body)
    if(error) throw new Error(error.details[0].message)

    const data=await Admin.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(!data) throw new Error("No data based on this ID")
    res.status(200).send(data)
}

const del_data=async(req,res)=>{
    const data=await Admin.findByIdAndDelete(req.params.id)
    if(!data) throw new Error("No data based on this ID")
    res.status(200).send(data)
}

module.exports={
    post_data,
    get_data,
    update_data,
    del_data
}