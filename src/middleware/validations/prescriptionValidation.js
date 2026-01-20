const {body,validationResult}=require("express-validator");

const PrescriptionValidation={
    rules:[
        body("patient_name")
            .trim()
            .notEmpty().withMessage("Patient name is required")
            .matches(/^[a-zA-Z ]+$/).withMessage("Patient name can only have letters and space"),
        body("problem")
            .trim()
            .notEmpty().withMessage("Problem is required"),
        body("total_paid")
            .forbidden().withMessage("total is set automatically"),
        body("date")
            .notEmpty().withMessage("Date of Prescription is required")
            .isDate({format:"YYYY-MM-DD"}).withMessage("Valid date is required"),
    ],
    errorHandler:(req,res,next)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            const err=new Error("Validation failed");
            err.statusCode=400;
            err.errors=errors.array();
            return next(err);
        }
        next();
    }
}
module.exports=PrescriptionValidation;