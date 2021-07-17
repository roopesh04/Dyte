const express=require('express')

const {
    post_data,
    get_data,
    update_data,
    del_data
}=require("../controllers/admin")

const router=new express.Router()

router.post("/",async (req,res)=>await post_data(req,res))

router.get("/",async (req,res)=>await get_data(req,res))

router.put("/:id",async (req,res)=>await update_data(req,res))

router.delete("/:id",async (req,res)=>await del_data(req,res))

module.exports=router