const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Supplier=sequelize.define("Supplier",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:DataTypes.STRING, allowNull:false},
    phone:{type:DataTypes.STRING, allowNull:false},
    address:{type:DataTypes.TEXT, allowNull:false}
},{
    timestamps:true,
    indexes:[
        {fields:["name"]}
    ]
});
module.exports=Supplier;