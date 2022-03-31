const express = require('express')
const multer = require("multer")
const path = require('path')
const multerController = require("./config/upload")
const postController = require("./controllers/PostController")
const likeController = require("./controllers/LikeController")

const routes = new express.Router() 

const upload = multer(multerController)

routes.get('/posts', postController.index)
routes.post('/posts', upload.single('image'), postController.store)

routes.post('/posts/:id/like', likeController.store)

module.exports = routes