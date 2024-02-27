"use strict";

// Third Party
const defaults = require("lodash/defaults");
const include = require("include")(__dirname);

// Project
const stash = include("index"); // Normally: require("stash-client");

// Test
const stashConfig = include("test/config");
const config = defaults({
  limit: 100
}, stashConfig);
const projectKey = "TEST";
const repositorySlug = "test-repo";
const values = {
  "closed": false,
  "description": "Keen!",
  "fromRef": {
    "id": "refs/heads/dev",
    "repository": {
      "project": {
        "key": projectKey
      },
      "slug": repositorySlug
    }
  },
  "locked": false,
  "open": true,
  "state": "OPEN",
  "title": "Test PR via REST API",
  "toRef": {
    "id": "refs/heads/master",
    "repository": {
      "project": {
        "key": projectKey
      },
      "slug": repositorySlug
    }
  }
  // "reviewers": [
  //   {
  //     "user": {
  //       "name": "username"
  //     }
  //   }
  // ]
};

stash(config).api()
  .projects()
  .repos(projectKey)
  .pullRequests(repositorySlug)
  .create(values)
  .then(response => console.log(response.body))
  .catch(console.error);
