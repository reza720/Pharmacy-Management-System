const {body}=require("express-validator");
const {errorHandler}=require("../../utils/validationErrorHandler");

const SupplierValidation={
    rules:[
        body("name")
            .trim()
            .toUpperCase()
            .notEmpty().withMessage("name can not be empty")
            .matches(/^[a-zA-Z ]+$/).withMessage("name should only have space and letters"),
        body("phone")
            .trim()
            .notEmpty().withMessage("phone should not be empty")
            .isNumeric().withMessage("only numbers are allowed")
            .isLength({ min: 10, max: 10 }).withMessage("phone should be 10 digits"),
        body("address")
            .trim()
            .notEmpty().withMessage("address can not be empty")
    ],
    errorHandler
};

module.exports=SupplierValidation;