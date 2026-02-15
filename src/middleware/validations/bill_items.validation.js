const {body}=require("express-validator");
const {errorHandler}=require("../../utils/validationErrorHandler");

const Bill_ItemsValidation={
    rules:[
        body("quantity")
            .isInt({min:0}).withMessage("Quantity cannot be negative"),
        body("unit_price")
            .isFloat({min:0}).withMessage("Unit Price cannot be negative"),
        body("total_price")
            .custom(value =>{
                if(value !== undefined){
                    throw new Error("Total Price is set by the System");
                }
                return true;
            })
    ],
    errorHandler
};

module.exports=Bill_ItemsValidation;