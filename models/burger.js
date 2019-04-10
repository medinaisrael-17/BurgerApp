var orm = require("../config/orm");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", col, val,  function(res){
            cb(res);
        });
    },

    updateOne: function(objColValues, condition, cb) {
        orm.updateOne("burgers", objColValues, condition, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;