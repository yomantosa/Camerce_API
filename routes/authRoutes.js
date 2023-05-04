const { register, login } = require("../controller/authControllers");
const { checkUser } = require("../middleware/authMiddleware");
var bodyParser = require('body-parser');

const router1 = require("express").Router();
var jsonParser = bodyParser.json();
router1.post("/1",jsonParser, checkUser); 
router1.post("/register",jsonParser , register);
router1.post("/login", jsonParser, login);

module.exports = router1;