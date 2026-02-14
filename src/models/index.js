const sequelize=require("../config/database");

const Supplier=require("./supplier");
const Item=require("./item");
const Purchase=require("./purchase");
const Purchase_Items=require("./purchase_items");
const Stock=require("./stock");
const Bill=require("./bill");
const Bill_Items=require("./bill_items");
const Payment=require("./payment");
const Prescription=require("./prescription");

Supplier.hasMany(Item, {foreignKey:"supplier_id"});
Item.belongsTo(Supplier, {foreignKey:"supplier_id"});

Supplier.hasMany(Purchase, {foreignKey:"supplier_id"});
Purchase.belongsTo(Supplier, {foreignKey:"supplier_id"});

Purchase.belongsToMany(Item, {through: Purchase_Items, foreignKey:"purchase_id", otherKey:"item_id"});
Item.belongsToMany(Purchase, {through:Purchase_Items, foreignKey:"item_id", otherKey:"purchase_id" });

Purchase.hasMany(Purchase_Items, {foreignKey:"purchase_id"});
Purchase_Items.belongsTo(Purchase, {foreignKey:"purchase_id"});

Item.hasMany(Purchase_Items, {foreignKey:"item_id"});
Purchase_Items.belongsTo(Item, {foreignKey:"item_id"});

Item.hasOne(Stock, {foreignKey:"item_id"});
Stock.belongsTo(Item, {foreignKey:"item_id"});

Bill.belongsToMany(Item, {through:Bill_Items, foreignKey:"bill_id", otherKey:"item_id"});
Item.belongsToMany(Bill, {through:Bill_Items, foreignKey:"item_id", otherKey:"bill_id"});

Bill.hasMany(Bill_Items, {foreignKey:"bill_id"});
Bill_Items.belongsTo(Bill, {foreignKey:"bill_id"});

Item.hasMany(Bill_Items, {foreignKey:"item_id"});
Bill_Items.belongsTo(Item, {foreignKey:"item_id"});

Bill.hasOne(Payment, {foreignKey:"bill_id"});
Payment.belongsTo(Bill, {foreignKey:"bill_id"});

module.exports={
    Supplier, 
    Item,
    Bill,
    Bill_Items, 
    Purchase, 
    Purchase_Items,
    Payment,
    Prescription,
    Stock
};







