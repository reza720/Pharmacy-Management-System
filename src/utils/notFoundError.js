function notFoundError(item){
    const err=new Error(`${item} not Found`);
    err.statusCode=404;
    throw err;
}
module.exports=notFoundError;