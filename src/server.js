const database=require("./config/database");
const app=require("./app");
const port =process.env.PORT || 3000;

(async()=>{
    try{
        await database.authenticate();
        await database.sync();
        console.log("Database connected");

        app.listen(port, ()=>{
            console.log(`app is running on port ${port}`);
        });
    }
    catch(err){
        console.error(err.message);
    }
})();