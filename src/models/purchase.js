const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Purchase=sequelize.define("Purchase",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    supplier_id:{type:DataTypes.INTEGER, allowNull:false},
    date:{type:DataTypes.DATEONLY, allowNull:false},
    total_Paid:{type:DataTypes.DECIMAL(10,2), allowNull:false}
},{
    timestamps:true
});

module.exports=Purchase;