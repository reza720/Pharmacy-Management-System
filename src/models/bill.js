const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Bill=sequelize.define("Bill",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    patient_name:{type:DataTypes.STRING, allowNull:false},
    total_paid:{type:DataTypes.DECIMAL(10,2), allowNull:false}
},{
    timestamps:true
});

module.exports=Bill;