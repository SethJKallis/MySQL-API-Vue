const db = require('../config/db.connection');
const bcrypt = require('bcrypt');


module.exports = {
    getUsers(result){
        db.query(`SELECT * FROM users`, (err, results) => {
            if(err){
                console.log(err);
                result(err, null);
            } else result(null, results)
        });
    },

    getUserById(id, result){
        db.query(`SELECT * FROM users WHERE user_id = ?`, [id], (err, results) => {
            if(err){
                console.log(err);
                result(err, null);
            } else result(null, results);
        });
    },

    async insertUser(data, result){
        const pass = data.user_pass;
        bcrypt.hash(pass, 10, (err,hash) => {
            if(err){
                console.log(err);
                result(err, null)
            } else {
                data.user_pass = hash
                db.query(`INSERT INTO users SET ?`, [data], (err,results) => {
                    if(err){
                        console.log(err);
                        result(err, null);
                    } else result(null, results);
                });
            }
        })
    },

    updateUser(data, id, result){
        db.query(`UPDATE users SET user_name = ?, user_email = ?, user_pass = ? WHERE user_id = ?`, [data.user_name, data.user_email, data.user_pass, id], (err,results) => {
            if(err){
                console.log(err);
                result(err,null);
            } else result(null, results)
        });
    },

    deleteUser(id, result){
        db.query(`DELETE FROM users WHERE user_id = ?`, [id], (err,results) => {
            if(err){
                console.log(err);
                result(err, null);
            } else result(null, results)
        });
    },

    async userLogin(user_email, user_pass, result){
        db.query(`SELECT * FROM users WHERE user_email = ?`, [user_email], (err,rows) => {
            if(err){
                console.log(err);
                result(err,null);
            } else if (rows.length == 0){
                result(null, {status: "Error", message: "User not found"})
            } else {
                const user = rows[0];
                bcrypt.compare(user_pass, user.user_pass, (err,res) => {
                    if(err){
                        console.log(err);
                        result(err,null);
                    } else if(res){
                        result(null, {status: "success", user: user})
                    } else {
                        result(null, {status: "error", message: "incorrect password"})
                    }
            })
            }
        })
    }

}
