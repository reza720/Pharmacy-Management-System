const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Purchase=sequelize.define("Purchase",{
    id:{type:DataTypes.INTEGER, autoIncrement:true,primaryKey:true},
    supplier_id:{type:DataTypes.INTEGER, allowNull:false},
    total_paid:{type:DataTypes.DECIMAL(10,2),allowNull:false},
    date:{type:DataTypes.DATEONLY,allowNull:false, defaultValue:DataTypes.NOW}
},{
    timestamps:true
});
module.exports=Purchase;