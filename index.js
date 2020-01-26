const app=require('express')()

const bodyParser=require('body-parser');

const mongoose=require('mongoose')

const Doctor=require('./models/DoctorModel')

mongoose.connect('mongodb://mregydev:Hafez#455@ds163164.mlab.com:63164/tabibi')

app.use(bodyParser.json())

app.post('/addDoctor',(req,res)=>{

    let doctor=new Doctor(req.body.model)

    doctor.save(function(err,doctor){

        if(err)
        {
            res.status(500).send("Problem in adding")
        }
        else
        {
            res.send(doctor)
        }
    })
    
})


app.post('/updateDoctor/:id',(req,res)=>{

    Doctor.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    },(err,doctor)=>{

        if (err) return res.status(500).send(err);
          res.send(doctor);
    })
})

app.delete('/deleteDoctor/:id',(req,res)=>{

    Doctor.findByIdAndRemove(req.params.id,(err,todoItem)=>{

        if(err)
        {
            res.status(500).send("Problem in deleting")
        }
        else
        {
            res.send("Doctor is deleted")
        }
    })

})
