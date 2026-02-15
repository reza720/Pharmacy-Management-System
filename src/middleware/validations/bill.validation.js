const {body}=require("express-validator");
const {errorHandler}=require("../../utils/validationErrorHandler");

const BillValidation={
    rules:[
        body("patient_name")
            .trim()
            .toUpperCase()
            .notEmpty().withMessage("name can not be empty")
            .matches(/^[a-zA-Z ]+$/).withMessage("name should only have space and letters"),
        body("total_paid")
            .custom(value =>{
                if(value !==undefined){
                    throw new Error("Total Paid is set by the system");
                }
                return true;
            })
    ],
    errorHandler
};

module.exports=BillValidation;