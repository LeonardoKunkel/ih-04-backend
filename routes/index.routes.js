// 1. IMPORTACIONES
const express = require("express");
const router = express.Router()

// 2. RUTEO
router.get("/", (req, res) => {
    res.send("Hola Mundo");
});

// 3. EXPORTACIONES
module.exports = router
