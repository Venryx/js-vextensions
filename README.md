# JS - VExtensions

Extensions for Javascript, by Venryx.

### Install

```
npm install --save js-vextensions
```

### Using class methods/extensions

##### Approach 1: (as class methods/extensions)

Setup:
```
// To add the class-extension typings (so typescript knows the class/prototype contains those methods)
// /// <reference path="../node_modules/js-vextensions/Source/ClassExtensions/@ApplyTypes.d.ts"/> // type import approach A
// import "js-vextensions/Source/ClassExtensions/@ApplyTypes"; // type import approach B
type __ = typeof import("../node_modules/js-vextensions/Source/ClassExtensions/@ApplyTypes"); // type import approach C (recommended)

// To actually add the methods to the class-prototype chain (so it works at runtime)
import "js-vextensions/Dist/ClassExtensions/@ApplyCode";
```

Usage:
```
const array = [1, 2, 3];
console.log(array.Skip(1)); // logs "2,3"
```

##### Approach 2: (using wrapper)
```
const array = [1, 2, 3];
console.log(ArrayCE(array).Skip(1)); // logs "2,3"
```

##### Approach 3: (using standalone functions)
```
const array = [1, 2, 3];
console.log(ArrayCES.Skip(array, 1)); // logs "2,3"
```