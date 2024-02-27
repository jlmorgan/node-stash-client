"use strict";

// Third Party
const fetch = require("node-fetch");
const get = require("lodash/fp/get");
const omit = require("lodash/fp/omit");
const Promise = require("bluebird");

module.exports = options => Promise.resolve(fetch(get("url", options), omit(["url"], options)))
  .then(response => response.json()
    .then(body => ({
      body,
      statusCode: response.status,
      statusMessage: response.statusText
    }))
  );
