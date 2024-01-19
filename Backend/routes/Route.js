const express = require("express");
const router = express.Router();
const Controller = require("../controllers/Controller");
router.get("/cakes", Controller.getall);
router.get("/cakes/:id", Controller.getbyId);
router.delete("/cakes/:id", Controller.deleteByiD);
router.post("/cakes", Controller.postOne);

module.exports = router;
