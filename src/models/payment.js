const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Payment=sequelize.define("Payment",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    prescription_id:{type:DataTypes.INTEGER, allowNull:false},
    total_paid:{type:DataTypes.INTEGER, allowNull:false},
    date:{type:DataTypes.DATEONLY, allowNull:false, defaultValue:DataTypes.NOW}
},{
    timestamps:true
});
module.exports=Payment;