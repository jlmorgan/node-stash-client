"use strict";

// Third Party
const fetch = require("node-fetch");
const get = require("lodash/fp/get");
const isEmpty = require("lodash/fp/isEmpty");
const isPlainObject = require("lodash/fp/isPlainObject");
const omit = require("lodash/fp/omit");
const Promise = require("bluebird");
const set = require("lodash/fp/set");

const toRequestOptions = options => (isPlainObject(options.body) ?
  set("body", JSON.stringify(options.body), omit(["url"], options)) :
  omit(["url"], options)
);

const toUrl = options => (isEmpty(get("qs", options)) ?
  get("url", options) :
  `${get("url", options)}?${new URLSearchParams(options.qs)}`
);

module.exports = options => Promise.resolve(fetch(toUrl(options), toRequestOptions(options)))
  .then(response => response.json()
    .then(body => ({
      body,
      statusCode: response.status,
      statusMessage: response.statusText
    }))
  );
