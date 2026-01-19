const {body, validationResult}=require("express-validator");

const ItemValidation={
    rules:[
        body("name")
            .trim()
            .notEmpty().withMessage("Name is required"),
        body("production_date")
            .notEmpty().withMessage("Production date is required")
            .isDate({format:"YYYY-MM-DD"}).withMessage("Valid date is required")
            .custom(value=>{
                const today=new Date();
                const proDate=new Date(value);
                if(proDate>=today){
                    throw new Error("Production date can not be in the future or today");
                }
                return true;
            }),
        body("expiration_date")
            .notEmpty().withMessage("Expiration date is required")
            .isDate({format:"YYYY-MM-DD"}).withMessage("Date should be valid")
            .custom((value,{req})=>{
                const proDate=new Date(req.body.production_date);
                const expDate=new Date(value);
                if(expDate<=proDate){
                    throw new Error("Expiration date must be after Production date");
                }
                return true;
            }),
        body("brand")
            .trim()
            .notEmpty().withMessage("Brand is required"),
        body("price")
            .notEmpty().withMessage("Price is required")
            .isDecimal().withMessage("price should be a number")
            .custom(value=>{
                if(parseFloat(value)<0){
                    throw new Error("Price can not be negative");
                }
                return true;
            })
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
};
module.exports=ItemValidation;