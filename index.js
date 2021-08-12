const dotenv = require("dotenv").config();
const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 9000

app.use(cors())
app.use(express.json())

app.use("/api/*", (_,res)=>{
    res.json({data:"the API is working"})
})

app.listen(port, ()=>{
    console.log(`the server is running on port: ${port}`)
})


console.log("it's alive");
console.log(__dirname);
console.log(__filename);
console.log(process.env.USER);
console.log(process.env.PORT);
console.log(process.env.GREET);
console.log(process.env.FOOD);
