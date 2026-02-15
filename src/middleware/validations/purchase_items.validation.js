const {body}=require("express-validator");
const {errorHandler}=require("../../utils/validationErrorHandler");

const Purchase_ItemsValidation={
    rules:[
        body("quantity")
            .isInt({min:0}).withMessage("Quantity cannot be negative"),
        body("unit_price")
            .isFloat({min:0}).withMessage("Unit price cannot be negative"),
        body("total_price")
            .custom(value =>{
                if(value !==undefined){
                    throw new Error("total price is set automatically by system");
                }
                return true;
            }),
    ],
    errorHandler
}

module.exports=Purchase_ItemsValidation;