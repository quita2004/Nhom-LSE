var soTuDaHoc = require("../models/STDHModel");

module.exports = function (app) {
	app.get("/api/setupSoTuDaHoc", function(req, res){
		var seedSoTuDaHoc = [
			{
			sotudahoc: 0
			}
		];
		soTuDaHoc.create(seedSoTuDaHoc, function(err, results){
			res.json(results);
		});
	});

}