const express = require("express");
const { getSpecificUrl, createUrl } = require("../controller/urls");
const { rateLimit } = require("../controller/rateLimit");

const urlRouter = new express.Router();

//This route is used to redirect to original url using short url as id
urlRouter.get("/:shortId", rateLimit, getSpecificUrl);
//This route is used to create short url
urlRouter.post("/", rateLimit, createUrl);

module.exports = urlRouter;
