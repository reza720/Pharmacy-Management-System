const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Stock=sequelize.define("Stock",{
    item_id:{type:DataTypes.INTEGER, primaryKey:true},
    quantity:{type:DataTypes.INTEGER, allowNull:false}
},{
    timestamps:true
});

module.exports=Stock;