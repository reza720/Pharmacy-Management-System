const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Prescription_Item=sequelize.define("Prescription_Item",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    prescription_id:{type:DataTypes.INTEGER, allowNull:false},
    item_id:{type:DataTypes.INTEGER, allowNull:false},
    quantity:{type:DataTypes.INTEGER, allowNull:false},
    unit_price:{type:DataTypes.DECIMAL(10,2), allowNull:false},
    total_price:{type:DataTypes.DECIMAL(10,2),allowNull:false}
},{
    timestamps:true
});
module.exports=Prescription_Item;