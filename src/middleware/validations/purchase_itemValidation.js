const {body,validationResult}=require("express-validator");

const Purchase_ItemValidation={
    rules:[
        body("quantity")
            .notEmpty().withMessage("quantity is required")
            .isInt({min:1}).withMessage("quantity at least be 1"),
        body("unit_price")
            .notEmpty().withMessage("unit price is required")
            .isDecimal({min:0}).withMessage("unit price has be positive"),
        body("total_price")
            .forbidden().withMessage("total price is automatically set")
    ],
    errorHandler:(req,res,next)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            const err=new Error("Validation failed");
            err.statusCode=400;
            err.errors=errors.array();
            return next(err);
        }
        next();
    }
}
module.exports=Purchase_ItemValidation;