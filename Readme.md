# Pharmacy Management System
This is a simple Pharmacy Management System. 

## Main Workflows
- Items are purchased from Suppliers and added to stock
- Customers come with or without prescription and their purchase become bills
- They pay for each bill

## Business Rules:
- Stocks works auto, it become less by items soled, and more by each purchase
- if item is removed its stock is auto removed
- Item can be updated
- If item is expired can no be added to the bills
- suppliers can not be removed once a purchase happens, but can be updated
- purchases can not be removed or updated
- prescription images are stored, and can noe be deleted or updated
- Payement are stored and can not be removed or updated

## Data Model:
### Entities, Attributes, Constraints
- **Supplier**: id(pk, auto), name(not null, not empty,valid human name), phone(not null, not empty,valid AFG phone #), address(not null, not empty)
- **Item**: id(pk, auto), name(not null, not empty), production_date(not null, valid date, not future), expiration_date(not null, valid date, after production), supplier_id(fk,not null), brand(not null, not empty), price(not null, not negative), isExpired(not null)
- **Purchase**: id(pk, auto), supplier_id(not null, fk), date(not null, valid date), total_paid(not null, auto by purchase_items table)
- **Purchase_Items**: id(pk, auto), purchase_id(fk, not null), item_id(not null), quantity(not null, not negative), unit_price(not null, not negative), total_price(not null, auto by quantity * unit_price)
- **Stock**: item_id(pk, fk), quantity(not null, not negative, auto by purchase and bill_Items)
- **Bill**: id(pk, auto), patient_name(not null, not empty, valid human name), total_paid(not null, auto by bill_items table)
- **Bill_Items**: id(pk, auto), item_id(not null), bill_id(not null)quantity(not null, not negative), unit_price(not null, not negative), total_price(not null, auto by quantity * unit_price)
- **Payment**: bill_id(pk, fk), amount(not null, auto by bill table)
- **Prescription**: id(pk, auto), image_url(not null,not empty)

### Relationships
- **Supplier** -> **Items** (1:n)
- **Supplier** -> **Purchases** (1:n)
- **Purchases** <-> **Items** (n:m), need a junction table: **Purchase_Item**
- **Purchases** -> **Purchase_Item** (1:n)

- **Item** -> **Stock** (1:1)

- **Bill** <-> **Items** (n:m), need a junction table: **Bill_Items**
- **Bill** -> **Bill_Items** (1:n)
- **Bill** -> **Payment** (1:1)





 