const db = require('../config/db.connection');

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

    insertUser(data, result){
        db.query(`INSERT INTO users SET ?`, [data], (err,results) => {
            if(err){
                console.log(err);
                result(err, null);
            } else result(null, results);
        });
    },

    updateUser(data, id, result){
        db.query(`UPDATE users SET user_name = ?, user_email = ?, user_password WHERE user_id = ?`, [data.user_name, data.user_email, data.user_password, id], (err,results) => {
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
    }

}
