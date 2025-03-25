const exprees =require("express")
const app =exprees()
require("dotenv").config()

const port=process.env.PORT


const users=[
    {
        id:1,
        name:"new user",
        number:"user number"

    },
    {
        id:2,
        name:"new user",
        number:"user number"

    },
    {
        id:2,
        name:"new user",
        number:"user number"

    },
]
app.get('/',(req,res)=>{
    res.status(200).json({message:"wellcome back"})

})
app.get('/user',(req,res)=>{
    res.status(200).json({users})

})
app.listen(port,()=>{
    console.log(`server running on ${port}`)

})