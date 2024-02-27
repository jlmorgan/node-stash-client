"use strict";

// Project
const toAuthorization = require("./toAuthorization");

module.exports = (config, path, body, params) => Object.freeze({
  body: body,
  headers: {
    "Authorization": toAuthorization(config),
    "Content-Type": "application/json"
  },
  json: true,
  method: "PUT",
  qs: params,
  url: config.url + path
});
