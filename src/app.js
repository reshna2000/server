const express = require("express")
const app = express();
app.use(express.json())

const AuthRoute=require("./routes/auth")
app.use("/",AuthRoute);

// app.get("/",(req,res)=>{res.send("ok");})

// app.post("/",(req,res)=>{
//     res.send(req.body);
//     console.log(req.body);})

app.listen(8004, () => {
    console.log("server listening at 8004")
})