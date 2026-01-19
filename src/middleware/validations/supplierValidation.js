const {body, validationResult}=require("express-validator");

const SupplierValidation={
    rules:[ 
        body("name")
            .trim()
            .notEmpty().withMessage("name is required")
            .matches(/^[a-zA-Z ]+$/).withMessage("name only can have letters and space"),
        body("phone")
            .trim()
            .notEmpty().withMessage("phone is required")
            .isNumeric().withMessage("phone number must be numbers")
            .isLength({min:10,max:10}).withMessage("phone number must be 10 digits")
    ],
    errorHandler:(req,res,next)=>{  
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            const err= new Error("Validation failed");
            err.statusCode=400;
            err.errors=errors.array();
            return next(err);
        }
        next();
    }
};
module.exports=SupplierValidation;
