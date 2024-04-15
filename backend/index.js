console.log("hola mundo")
const express=require("express")
const app= express()

app.use("/ping", (req,res,next)=>{
    res.status(200).json("Pong")

})

app.use("*",(req,res,next)=>{
    return res.status(400).json("no tengo nada que ofrecerte")


}
)
app.listen(5555,()=>{console.log("excuchando el puerto http://localhost:5555")})