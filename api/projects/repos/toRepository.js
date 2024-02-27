"use strict";

module.exports = (values = {}) => Object.seal({
  forkable: values.forkable || true,
  name: values.name,
  scmId: "git"
});
