let express = require("express");
let router = express.Router();

const ctrl = require("./heroes-ctrl");

router.get("/", ctrl.getHeroList);
router.post("/login", ctrl.doLogin);

module.exports = router;