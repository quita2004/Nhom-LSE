var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var soTuDaHocSchema = new Schema({
   sotudahoc: Number 
});

var soTuDaHoc = mongoose.model("soTuDaHoc", soTuDaHocSchema);

module.exports = soTuDaHoc;