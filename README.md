# Silabe.js

[![Travis](https://img.shields.io/travis/neculaesei/silabe.js.svg?style=for-the-badge)](https://travis-ci.org/neculaesei/silabe.js)
[![GitHub issues](https://img.shields.io/github/issues/neculaesei/silabe.js.svg?style=for-the-badge)](https://github.com/neculaesei/silabe.js/issues)
[![GitHub license](https://img.shields.io/github/license/neculaesei/silabe.js.svg?style=for-the-badge)](https://github.com/neculaesei/silabe.js/blob/master/LICENSE)


![npm](https://img.shields.io/npm/v/npm.svg?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/silabe.svg?style=for-the-badge)

---

## Project description

**English**

Silabe.js is a JavaScript syllabification library for the romanian language.

**Romanian**

RO: Librarie JavaScript pentru despartirea cuvintelor in silabe in limba romana.

## Installation

Option 1: Install through **NPM**:

```bash
npm install silabe --save
```

Option 2: Download a [release](https://github.com/neculaesei/silabe.js/releases) and require / include it.

## Using the library

Silabe is a [UMD](https://github.com/umdjs/umd) module that you can easily use on both server and client sides.

You can either require and use the library like this:

```javascript
const silabe = require('silabe')
console.log(silabe('examen'))
// Outputs to console: ['e', 'xa', 'men']
```

Or you can use a `<script>` tag and just load the library in a web page, **silabe** will be a global.
```html
<script src="lib/silabe.min.js"></script>
<script type="text/javascript">
  window.onload = function () {
    console.log(silabe('examen'))
  }
</script>
```

---

### License

This project is licensed under the [GNU Affero General Public License v3.0](https://github.com/neculaesei/silabe.js/blob/master/LICENSE) license.

Permissions:

* Commercial use
* Modification
* Distribution
* Patent use
* Private use

Limitations:

* Liability
* Warranty

[Read full license on opensource.org](https://opensource.org/licenses/AGPL-3.0)

---

Made with <3 by [Andrew](https://andreineculaesei.com)
