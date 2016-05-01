"use strict";

// Third Party
const get = require("lodash/get");
const include = require("include")(__dirname);

// Project
const filterProperties = include("src/filterProperties");

module.exports = values => {
  values = values || {};

  const defaultAnchor = {};
  const defaultParent = {};
  const anchorProperties = [
    "fileType",
    "line",
    "lineType",
    "path",
    "srcPath"
  ];
  const parentProperties = ["id"];

  return Object.seal({
    anchor: filterProperties(anchorProperties, get(values, "anchor", defaultAnchor)),
    parent: filterProperties(parentProperties, get(values, "parent", defaultParent)),
    text: values.text
  });
};
