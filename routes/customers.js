const express=require("express")
const router=express.Router()

const {getAllusers,createUser}=require('../controllers/customer')

router.route('/').get(getAllusers).post(createUser)

module.exports=router