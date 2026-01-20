const {body, validationResult}=require("express-validator");

const PaymentValidation={
    rules:[
        body("total_paid")
            .forbidden().withMessage("Total is automatically filled"),
        body("date")
            .trim()
            .notEmpty().withMessage("date is required")
            .isDate().withMessage("Valid date is needed")
    ],
    errorHandler:(req,res,next)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            const err=new Error("Validation Result");
            err.statusCode=400;
            err.errors=errors.array();
            return next(err);
        }
        next();
    }
}
module.exports=PaymentValidation;