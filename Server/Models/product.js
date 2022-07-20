const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
     name:{
         type:String
     },
     productName:{
         type:Array
     }
})
const product=mongoose.model("product",productSchema)
module.exports=product