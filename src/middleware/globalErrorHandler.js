const globalErrorHandler=(err,req,res,next)=>{
    console.log(err);

    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Service Error";

    res.status(statusCode).json({ success: false, message, error: err.error || [] });
}
module.exports = globalErrorHandler;
