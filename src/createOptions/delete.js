"use strict";

// Project
const toAuthorization = require("./toAuthorization");

module.exports = (config, path, params) => Object.freeze({
  headers: {
    "Authorization": toAuthorization(config)
  },
  json: true,
  method: "DELETE",
  qs: params,
  url: config.url + path
});
