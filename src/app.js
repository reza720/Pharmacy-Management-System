const express=require("express");
const router=require("./routers");
const globalErrorHandler=require("./middleware/globalErrorHandler");
const app=express();

app.use(express.json());
app.use("/api",router);
app.use((req,res,next)=>{
    res.status(404).json({message:"Route not found"});
});
app.use(globalErrorHandler);

module.exports=app;