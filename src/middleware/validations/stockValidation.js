const {body, validationResult}=require("express-validator");

const StockValidation={
    rules:[
        body("quantity")
            .notEmpty().withMessage("quantity is required")
            .isInt({min:0}).withMessage("quantity can not be negative")
    ],
    errorHandler:(req,res,next)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            const err=new Error("Validation Failed");
            err.statusCode=400;
            err.errors=errors.array();
            return next(err);
        }
        next();
    }   
}
module.exports=StockValidation;