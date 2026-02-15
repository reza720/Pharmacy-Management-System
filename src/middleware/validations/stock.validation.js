const {body}=require("express-validator");
const {errorHandler}=require("../../utils/validationErrorHandler");

const StockValidation={
    rules:[
        body("quantity")
            .isInt({min:0}).withMessage("Quantity can not be Zero")
            .custom(value =>{
                if(value !==undefined){
                    throw new Error("Quantity is set by the system");
                }
                return true;
            })
    ],
    errorHandler
};

module.exports=StockValidation;