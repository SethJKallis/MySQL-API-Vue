const db = require('../config/db.connection');



module.exports = {
getProducts(result){
        db.query(`SELECT * FROM products`, (err,results) => {
            if(err){
                console.log(err);
                result(err,null);
            }
            else result(null, results);
        });
    },
    
getProductById(id, result){
        db.query(`SELECT * FROM products WHERE product_id=?`, [id], (err,results) => {
            if(err){
                console.log(err);
                result(err,null);
            }
            else result(null, results[0]);
        })
    },
    
insertProduct(data ,result){
        db.query(`INSERT INTO products SET ?`, [data], (err,results) => {
            if(err){
                console.log(err);
                result(err,null);
            }
            else result(null,results);
        })
    },
    
updateProduct(data, id, result){
        db.query(`UPDATE products SET product_name = ?, product_price = ? WHERE product_id = ?`, [data.product_name, data.product_price, id], (err,results) => {
            if(err){
                console.log(err);
                result(err,null);
            }
            else result(null, results);
        });
    },
    
deleteProduct(id, result){
        db.query(`DELETE FROM products WHERE product_id = ?`, [id], (err,results) => {
            if(err){
                console.log(err);
                result(err,null);
            }
            else result(null,results)
        })
    }
}