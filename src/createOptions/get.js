"use strict";

// Third Party
const defaults = require("lodash/defaults");

// Project
const toAuthorization = require("./toAuthorization");

module.exports = (config, path, params) => {
  const defaultLimit = 100;

  return Object.freeze({
    headers: {
      "Authorization": toAuthorization(config)
    },
    json: true,
    method: "GET",
    qs: defaults({}, params || {}, {
      limit: config.limit || defaultLimit
    }),
    url: config.url + path
  });
};
