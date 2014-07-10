This is my angular project template (or seed). It's currently still under development.

Yeoman and ngBoilerplate did not suit my needs. This borrows a lot of the good parts from ngBoilerplate.

Installation
============
```
$ npm install
$ bower install
$ grunt
```

There is a file at build/config/userConfig.js that can be used to overwrite some configuration values.

Benefits over ngBoilerplate
===========================

* Built-in dev server, live reload etc
* Don't need to restart grunt when new javascript files are added, they are picked up automatically.
* Javascript files are synced (sort of like rsync) with the build directories instead of copied. In ngBoilerplate,
  files are only copied over, when you delete files from your src directory, they remain in the build directory.
* Newer versions of many grunt tasks, separated task config for easier management
* SCSS instead of LESS, just better in my opinion

TODO
====

* Currently only the dev target is working, need to create a production target with minified files
* Need to setup template caches
* Need to setup test runner
  