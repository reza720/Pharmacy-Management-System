const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Prescription=sequelize.define("Prescription",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    patient_name:{type:DataTypes.STRING, allowNull:false},
    problem:{type:DataTypes.TEXT, allowNull:false},
    total_paid:{type:DataTypes.DECIMAL(10,2),allowNull:false, defaultValue:0.00},
    date:{type:DataTypes.DATEONLY, allowNull:false}
},{
    timestamps:true,
    indexes:[
        {fields:["patient_name"]}
    ]
});
module.exports=Prescription;