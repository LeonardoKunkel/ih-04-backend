// 1. IMPORTACIONES
const express = require("express");
const res = require("express/lib/response");
const router = express.Router()

// 2. RUTEO
router.get("/", (req, res) => {
    res.send("Hola Mundo");
});

router.get("/contacto", (req, res) => {
    res.send("Contacto")
});

router.get("/prueba", (req, res) => {
    res.send("This is a test!")
});

router.get("/117", (req, res) => {
    res.render("index")
})

// 3. EXPORTACIONES
module.exports = router
