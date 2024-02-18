const CustomAPIErrror=require('../errors/custom-error')
const Customer=require('../models/customers')
const getAllusers= async(req,res)=>{
        const customers = await Customer.find({})
  res.status(200).json({ customers })
       
}

const createUser=async(req,res)=>{
    const user=await  Customer.create(req.body)
     console.log(user);
    res.status(201).json({user})
}
module.exports={
    getAllusers,
    createUser
}


