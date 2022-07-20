const mongoose=require("mongoose")
const AnswerSchema=new mongoose.Schema({
    answer:{
        type:Array,
        require:true,
    },
    marks:{
        type:Number,
        require:true,
    },
    userName:{
        type:String,
        require:true
    }
})
const answer=mongoose.model("ans",AnswerSchema)
module.exports=answer