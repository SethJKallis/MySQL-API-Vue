const userModel = require('../models/userModel');

module.exports = {
    showUsers(req,res){
        userModel.getUsers((err,results) => {
            if(err){
                res.send(err);
            } else res.json(results);
        });
    },

    showUserById(req,res){
        userModel.getUserById(req.params.id, (err,results) => {
            if(err){
                res.send(err);
            } else res.json(results);
        });
    },
    createUser(req,res){
        const data = req.body;
        userModel.insertUser(data, (err,results) => {
            if(err){
                res.send(err);
            } else res.json(results);
        });
    },

    updateUser(req,res){
        const data = req.body;
        const id = req.params.id;
        userModel.updateUser(data, id, (err,results) => {
            if(err){
                res.send(err);
            } else res.json(results)
        })
    },

    deleteUser(req,res){
        const id = req.params.id;
        userModel.deleteUser(id, (err,results) => {
            if(err){
                res.send(err);
            } else res.json(results)
        });
    }
 }