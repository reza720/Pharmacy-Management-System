const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Payment=sequelize.define("Payment",{
    bill_id:{type:DataTypes.INTEGER, primaryKey:true},
    amound:{type:DataTypes.DECIMAL(10,2), allowNull:false}
},{
    timestamps:true
});

module.exports=Payment;