require('dotenv').config();

const { getRollupConfig } = require('@elderjs/elderjs');
const svelteConfig = require('./svelte.config');

const rollupconfig = [...getRollupConfig({ svelteConfig })];
module.exports = rollupconfig;
