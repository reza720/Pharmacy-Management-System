const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Item=sequelize.define("Item",{
    id:{type:DataTypes.INTEGER, autoIncrement:true,  primaryKey:true},
    name:{type:DataTypes.STRING, allowNull:false, unique:true},
    production_date:{type:DataTypes.DATEONLY, allowNull:false},
    expiration_date:{type:DataTypes.DATEONLY, allowNull:false},
    brand:{type:DataTypes.STRING, allowNull:false},
    price:{type:DataTypes.DECIMAL(10,2), allowNull:false},
    supplier_id:{type:DataTypes.INTEGER, allowNull:false}
},{
    timestamps:true
});
module.exports=Item;