const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Purchase_Items=sequelize.define("Purchase_Items",{
    id:{type:DataTypes.INTEGER, autoIncrement:true,primaryKey:true},
    purchase_id:{type:DataTypes.INTEGER, allowNull:false},
    item_id:{type:DataTypes.INTEGER, allowNull:false},
    quantity:{type:DataTypes.INTEGER, allowNull:false},
    unit_price:{type:DataTypes.DECIMAL(10,2), allowNull:false},
    total_price:{type:DataTypes.DECIMAL(10,2), allowNull:false}
},{
    timestamps:true
});

module.exports=Purchase_Items;