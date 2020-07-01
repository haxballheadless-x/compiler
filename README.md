HHX Compiler is a way to organize your code to go up to Haxball Headless.



## Installation

#### NPM

```
npm i @hhxjs/compiler
```

#### YARN

```
yarn add @hhxjs/compiler
```

-----

## Qualities

- ✔️ Possibility to organize your code
- ✔️ CommonJS
- ✔️ Easy to set up
- ✔️ Efficient

----

### Examples



```js

const HHX = require("@hhxjs/compiler");

const client = new HHX("room.js");



client.compile("dist/script.js"); // √ Generated in dist/script.js

```