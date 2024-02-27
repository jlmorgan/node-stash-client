"use strict";

module.exports = config => `Basic ${Buffer.from(`${config.username}:${config.password}`).toString("base64")}`;
