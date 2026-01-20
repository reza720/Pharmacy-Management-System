// Main Tables
const Supplier=require("./supplier");
const Item=require("./item");
const Stock=require("./stock");
const Prescription=require("./prescription");
const Payment=require("./payment");
const Purchase=require("./purchase");
//Junction Tables
const Purchase_Item=require("./purchase_item");
const Prescription_Item=require("./prescription_item");

// Associations
Supplier.hasMany(Item, {foreignKey:"supplier_id"});
Item.belongsTo(Supplier,{foreignKey:"supplier_id"});

Item.hasOne(Stock,{foreignKey:"item_id"});
Stock.belongsTo(Item,{foreignKey:"item_id"});

Prescription.hasOne(Payment,{foreignKey:"prescription_id"})
Payment.belongsTo(Prescription,{foreignKey:"prescription_id"});

Supplier.hasMany(Purchase,{foreignKey:"supplier_id"});
Purchase.belongsTo(Supplier,{foreignKey:"supplier_id"});

Prescription.belongsToMany(Item, {through:Prescription_Item, foreignKey:"prescription_id", otherKey:"item_id"});
Item.belongsToMany(Prescription, {through:Prescription_Item, foreignKey:"item_id",otherKey:"prescription_id"});
Item.hasMany(Prescription_Item,{foreignKey:"item_id"});
Prescription_Item.belongsTo(Item,{foreignKey:"item_id"});
Prescription.hasMany(Prescription_Item, {foreignKey:"prescription_id"});
Prescription_Item.belongsTo(Prescription, {foreignKey:"prescription_id"});


Purchase.belongsToMany(Item, {through:Purchase_Item, foreignKey:"purchase_id", otherKey:"item_id"});
Item.belongsToMany(Purchase, {through:Purchase_Item, foreignKey:"item_id", otherKey:"purchase_id"});
Item.hasMany(Purchase_Item,{foreignKey:"item_id"});
Purchase_Item.belongsTo(Item,{foreignKey:"item_id"});
Purchase.hasMany(Purchase_Item,{foreignKey:"purchase_id"});
Purchase_Item.belongsTo(Purchase,{foreignKey:"purchase_id"});

module.exports={
    Supplier,
    Item,
    Stock,
    Prescription,
    Payment,
    Purchase,
    Purchase_Item,
    Prescription_Item
};