"use strict";

// Third Party
const defaults = require("lodash/defaults");
const include = require("include")(__dirname);

// Project
const stash = include("index"); // Normally: require("stash-client");

// Test
const stashConfig = include("test/config");
const config = defaults({}, stashConfig);
const params = {
  name: "test"
};

// jscs:disable jsDoc
stash(config).api()
  .repos(params)
  .then(response => console.log(response.body))
  .catch(console.error);
