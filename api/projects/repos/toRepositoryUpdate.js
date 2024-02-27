"use strict";

// Third Party
const get = require("lodash/get");

module.exports = (values = {}) => Object.seal({
  forkable: values.forkable,
  name: values.name,
  project: Object.seal({
    key: get(values, "project.key")
  }),
  public: values.public
});
