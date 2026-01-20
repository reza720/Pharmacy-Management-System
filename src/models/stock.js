const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Stock=sequelize.define("Stock",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    item_id:{type:DataTypes.INTEGER, allowNull:false},
    quantity:{type:DataTypes.INTEGER, allowNull:false}
},{
    timestamps:true
});
module.exports=Stock;