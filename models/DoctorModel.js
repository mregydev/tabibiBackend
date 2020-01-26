const mongoose=require('mongoose')

var doctorSchema = mongoose.Schema({
    name: String,
    age: String,
    speciality:String,
    governorateId:Number,
    cityId:Number,
    tags:String
})

module.exports=new mongoose.model('Doctor',doctorSchema)
