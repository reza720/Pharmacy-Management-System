const {Supplier, Purchase}=require("../models");
const notFoundError=require("../utils/notFoundError");

class SupplierService{
    // Creating Supplier
    async createSupplier(data){
        return Supplier.create(data);
    }

    // Fetching Suppplier Data
    async getSuppliers(options={}){
        return Supplier.findAll({where:options});
    }
    async getSupplierById(id){
        const supplier=await Supplier.findByPk(id);
        if(!supplier) notFoundError("supplier");
        return supplier;
    }

    // Update Supplier
    async updateSupplier(id,data){
        const supplier=await this.getSupplierById(id);
        await supplier.update(data);
        return supplier;
    }

    // Delete Supplier
    async deleteSupplier(id){
        const supplier=await this.getSupplierById(id);
        const purchases=await Purchase.count({where:{supplier_id:id}});
        if(purchases>0){
            const err=new Error("Supplier cannot be deleted");
            err.statusCode=403;
            throw err;
        }
        await supplier.destroy();
        return {message:"Deleted"};
    }
}

module.exports=new SupplierService();