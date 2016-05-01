"use strict";

// Third Party
const defaults = require("lodash/defaults");
const include = require("include")(__dirname);

// Project
const stash = include("index"); // require("stash-client");

// Test
const stashConfig = include("test/config");
const config = defaults({
  limit: 100
}, stashConfig);
const projectKey = "TEST";
const repositorySlug = "test-repo";
const pullRequestId = "3";
const values = {
  anchor: {
    line: 1,
    path: "README.md",
    srcPath: "README.md"
  },
  text: "Test PR comment"
};

// jscs:disable jsDoc
// NOTE(jlmorgan): Not sure why, but I get 404 for these requests.
stash(config).api().projects().repos(projectKey).pullRequests(repositorySlug).comments(pullRequestId).create(values)
  .then(response => console.log(response.body))
  .catch(console.error);
