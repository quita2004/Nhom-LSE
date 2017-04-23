var soTuDaHoc = require("../models/STDHModel");

function getSoTuDaHoc(res) {
	soTuDaHoc.find(function (err, sotudahoc) {

		if (err) {
			res.status(500).json(err);
		} else {
			res.json(sotudahoc);
		}

	});
}

module.exports = function (app) {

    app.get("/api/sotudahocs", function (req, res) {
    	getSoTuDaHoc(res);
    });


    /**
     * Update
     */

    app.put("/api/sotudahoc", function (req, res) {

     	if (!/^[-0-9a-fA-F]{24}$/.test(req.body._id)) {
     		return res.status(400).send("ID is required");
     	} else {
     		soTuDaHoc.update({
     			_id: req.body._id
     		}, {
     			sotudahoc: req.body.sotudahoc
     		}, function (err, sotudahoc) {
     			if (err) {
     				return res.status(500).json(err);
     			} else {
     				getSoTuDaHoc(res);
     			}
     		});
     	}
     });

 }