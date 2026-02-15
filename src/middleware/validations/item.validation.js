const {body}=require("express-validator");
const {errorHandler}=require("../../utils/validationErrorHandler");

const ItemValidation = {
  rules:[
    body("name")
        .trim()
        .notEmpty().withMessage("Name cannot be empty"),
    body("production_date")
        .isDate({format:"YYYY-MM-DD"}).withMessage("Valid date is required")
        .custom(value =>{
            const today= new Date().toISOString().split("T")[0];

            if (value>today) {
            throw new Error("Production date must be in the past");
            }
            return true;
        }),
    body("expiration_date")
        .isDate({format:"YYYY-MM-DD"}).withMessage("Valid Date is required")
        .custom((value,{req}) =>{
            const productionDate=req.body.production_date;
           
            if (!productionDate) {
                throw new Error("Production date is required first");
            }

            if(value<=productionDate){
                throw new Error("Expiration date must be after the production date")
            }
            return true;
        }),
    body("brand")
        .trim()
        .notEmpty().withMessage("Brand can not be empty"),
    body("price")
        .isFloat({min:0}).withMessage("price can not be negative")
    ],
    errorHandler
};

module.exports=ItemValidation;
