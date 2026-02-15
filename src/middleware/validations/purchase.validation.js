const {body}=require("express-validator");
const {errorHandler}=require("../../utils/validationErrorHandler");

const PurchaseValidation={
    rules:[
        body("date")
            .isDate({format:"YYYY-MM-DD"}).withMessage("Valid date is requried"),
        body("total_paid")
            .custom(value=>{
                if(value !==undefined){
                    throw new Error("Total paid is automatically filled by the system");
                }
                return true;
            })
    ],
    errorHandler
};

module.exports=PurchaseValidation;