const {body}=require("express-validator");
const {errorHandler}=require("../../utils/validationErrorHandler");

const PaymentValidation={
    rules:[
        body("amount")
            .custom(value =>{
                if(value !==undefined){
                    throw new Error("Amount is set by the sysetm");
                }
                return true;
            })
    ],
    errorHandler
};

module.exports=PaymentValidation;