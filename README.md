# JS - VExtensions

Extensions for Javascript, by Venryx.

### Installation

```
npm install js-vextensions --save-exact
```

The `--save-exact` flag is recommended, since this package uses [Explicit Versioning](https://medium.com/sapioit/why-having-3-numbers-in-the-version-name-is-bad-92fc1f6bc73c) (`Release.Breaking.FeatureOrFix`) rather than SemVer (`Breaking.Feature.Fix`).

To let npm increment `FeatureOrFix` (recommended), prepend "`~`" to its version in `package.json`. (for `Breaking`, prepend "`^`")

### Using class methods/extensions

##### Approach 1: (as class methods/extensions)

Setup:
```
// To add the class-extension typings (so typescript knows the class/prototype contains those methods)
// /// <reference path="../node_modules/js-vextensions/Helpers/@ApplyCETypes.d.ts"/> // type import approach A
// import "js-vextensions/Helpers/@ApplyCETypes"; // type import approach B
type __ = typeof import("../node_modules/js-vextensions/Helpers/@ApplyCETypes"); // type import approach C (recommended)

// To actually add the methods to the class-prototype chain (so it works at runtime)
import "js-vextensions/Helpers/@ApplyCECode.js";
```

Usage:
```
const array = [1, 2, 3];
console.log(array.Skip(1)); // logs "2,3"
```

##### Approach 2.A: (using wrapper, with type specified)
```
const array = [1, 2, 3];
console.log(ArrayCE(array).Skip(1)); // logs "2,3"
```

##### Approach 2.B: (using wrapper, with type inferred)
```
const array = [1, 2, 3];
console.log(CE(array).Skip(1)); // logs "2,3"
```

##### Approach 3: (using standalone functions)
```
const array = [1, 2, 3];
console.log(ArrayCES.Skip(array, 1)); // logs "2,3"
```