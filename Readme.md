# Pharmacy Management System

This is a simple **Pharmacy Management System** developed using **Express.js**, **Sequelize**, and **MySQL**. The project follows a **layered architecture** and is intended for **internal use by pharmacy staff only**.  
It manages **items (drugs and medical devices), suppliers, stock, prescriptions, purchases, and payments**.

## Actors
- Pharmacy Staff

## Use Cases
- Manage Items (Drugs / Medical Devices)
- Manage Suppliers
- Manage Stock
- Manage Prescriptions
- Manage Payments
- Manage Purchases

## Objects & Their Columns

### Independent Objects
- **Supplier**: id, name, phone

### Dependent Objects
- **Item (Drug / Medical Device)**: id, name, production_date, expiration_date, supplier_id, brand, price
- **Stock**: id, item_id, quantity
- **Prescription**: id, patient_name, problem, date
- **Payment**: id, prescription_id, total_amount, date
- **Purchase**: id, supplier_id, date, total_amount

### Junction Tables
- **Prescription_Item**: prescription_id, item_id, quantity, dosage
- **Purchase_Item**: purchase_id, item_id, quantity, unit_price

## Relationships of Objects
- One **Supplier** has many **Items**, and each Item belongs to one Supplier
- Each **Item** has one **Stock**, and each Stock belongs to one Item
- **Prescriptions** and **Items** have a many-to-many relationship, resolved by the **Prescription_Item** junction table
- Each **Prescription** has one **Payment**, and each Payment belongs to one Prescription
- One **Supplier** has many **Purchases**, and each Purchase belongs to one Supplier
- **Purchases** and **Items** have a many-to-many relationship, resolved by the **Purchase_Item** junction table


