const {body, validationResult}=require("express-validator");

const PurchaseValidation={
    rules:[
        body("total_paid")
            .forbidden().withMessage("total paid will be automatically set"),
        body("date")
            .trim()
            .notEmpty().withMessage("Date is required")
            .isDate().withMessage("Valid date is required")
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
module.exports=PurchaseValidation;