const express=require('express')
const app=express()


app.listen(4000,()=>{
    console.log('conencted to 4000')
})

app.get('/',(req,res)=>{
    res.status(200).json({
        name:"ronak",
        age:23,
        occupation:'student'
    })
})