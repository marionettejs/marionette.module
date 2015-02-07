# marionette.module
[![Build Status](https://travis-ci.org/marionettejs/marionette.module.svg)](https://travis-ci.org/marionettejs/marionette.module)

### This Shim is a Work in Progress ###

#### TODO

* add a build system
* add tests around the shim
* release to npm

------------

The (deprecated) Marionette.Module Class as a standalone library.

#### Shim for Marionette.Application

In Marionette 1.x and 2.x the `Application` Class has a `module` method. To shim this behavior for v3.x

```js
require('marionette.module').shim(Marionette.Application);
```

This will add Modules onto the application prototype.

#### Standalone Module Class

If you would like to use the standalone `Module` Class you can

```js
var Module = require('marionette.module');
```
