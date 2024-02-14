const express=require('express')
const router=express.Router()
const Task= require('../models/taskschema')

router.get('/task',async(req,res)=>{
    try{
        const tasks= await Task.find()
        res.status(200).json(tasks)
    }catch(err){
        res.status(400).json({error:err.message})

    }
})

router.post('/task',async(req,res)=>{
    try{
        const tasks=  new Task(req.body)
        await tasks.save()
        res.status(200).json({message:" added succesfully ",tasks})
    }catch(err){
        res.status(400).json({error:err.message})
        

    }
})

router.put('/task/:id',async(req,res)=>{
    try{
        const tasks=  await Task.findByIdAndUpdate(req.params.id,req.body)
       
        res.status(200).json({message:" updated succesfully "})
    }catch(err){
        res.status(400).json({error:err.message})
    }
})
router.delete('/task/:id',async(req,res)=>{
    try{
        const tasks=  await Task.findOneAndDelete(req.params.id)
       
        res.status(200).json({message:" deleted succesfully"})
    }catch(err){
        res.status(400).json({error:err.message})
    }
})





module.exports=router 