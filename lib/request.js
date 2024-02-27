"use strict";

// Third Party
const fetch = require("node-fetch");
const get = require("lodash/fp/get");
const isEmpty = require("lodash/fp/isEmpty");
const omit = require("lodash/fp/omit");
const Promise = require("bluebird");

module.exports = options => Promise.resolve(fetch(
  isEmpty(get("qs", options)) ? get("url", options) : `${get("url", options)}?${new URLSearchParams(options.qs)}`,
  omit(["url"], options)
))
  .then(response => response.json()
    .then(body => ({
      body,
      statusCode: response.status,
      statusMessage: response.statusText
    }))
  );
