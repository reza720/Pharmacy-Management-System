const Supplier=require("./supplier");
const Item=require("./item");

// Associations
Supplier.hasMany(Item, {foreignKey:"supplier_id"});
Item.belongsTo(Supplier,{foreignKey:"supplier_id"});


module.exports={
    Supplier,
    Item
};