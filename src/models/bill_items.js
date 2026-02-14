const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Bill_Items=sequelize.define("Bill_Items",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    item_id:{type:DataTypes.INTEGER, allowNull:false},
    bill_id:{type:DataTypes.INTEGER, allowNull:false},
    quantity:{type:DataTypes.INTEGER, allowNull:false},
    unit_price:{type:DataTypes.DECIMAL(10,2), allowNull:false},
    total_price:{type:DataTypes.DECIMAL(10,2), allowNull:false}
},{
    timestamps:true
});

module.exports=Bill_Items;