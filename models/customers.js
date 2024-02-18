const mongoose=require('mongoose')

const customerSchema=new mongoose.Schema({
    name:{
type:String,
required:[true,'customer name must be provided']
    },
    contact:{
        type: Number,
        required:[true,'contact no  must be provided']

    },
    
    bookingDate:{
        type:Date,
        default:Date.now(),
    },
   email:{
    type:String,
     required:[true,'email must be provided']
   }
 })

 module.exports=mongoose.model('Customer',customerSchema)