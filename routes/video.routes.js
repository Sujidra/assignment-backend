/* NPM IMPORTS */
const express = require("express")
const router = express.Router()

/* MIDDLEWARES */
const authenticateRoute = require('../middleware')

// CONTROLLER FUNCTIONS
const {
    getVideos
} = require('../controllers/video/index');

router.post('/getvideos', authenticateRoute, getVideos)


module.exports = router

