const path = require("path");

module.exports = {
	extends: [
		"vbase",
	],
	settings: {},
	rules: {
		// eslint can't resolve the .js import paths in Source, so don't try (the imports are .js because esm requires it, and TS doesn't add)
		"import/no-unresolved": "off",
		// don't have extensions auto-detected; we need the explicit .js imports
		"import/extensions": [
			"error",
			"ignorePackages",
		],
	},
	globals: {},
};