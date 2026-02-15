const {body}=require("express-validator");
const {errorHandler}=require("../../utils/validationErrorHandler");

const PrescriptionValidation={
    rules:[
        body("image_url")
            .trim()
            .notEmpty().withMessage("Image URL cannot be empty")
    ],
    errorHandler
};

module.exports=PrescriptionValidation;