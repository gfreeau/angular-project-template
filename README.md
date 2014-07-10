This is my angular project template (or seed). It's currently still under development.

Yeoman and ngBoilerplate did not suit my needs. This borrows a lot of the good parts from ngBoilerplate.

Installation
============

Create a new file called build/config/userConfig.js from the build/config/userConfig.js.dist template.

```
$ npm install
$ bower install
$ grunt
```

Benefits over ngBoilerplate
===========================

* Built-in dev server, live reload etc
* Don't need to restart grunt when new javascript files are added, they are picked up automatically.
* Javascript files are synced (sort of like rsync) with the build directories instead of copied. In ngBoilerplate,
  files are only copied over, when you delete files from your src directory, they remain in the build directory.
* Newer versions of many grunt tasks, separated task config for easier management
* SCSS instead of LESS, just better in my opinion


Usage
=====

It is very similar to ngBoilerplate, the idea is that you have many modules, some are app specific and some could be shared
between projects. Read the ngBoilerplate documentation for more information.

ngBoilerplate requires that you have one module per file, you can use a small trick to split your module to many files.
In the module root, prefix one file with an underscore such as _init.js. Grunt's file matching is alphabetical, using
the underscore will ensure this file is included first before the other module files allowing you to use Angular's dependency
injection and split the module up into many files.

TODO
====

* Currently only the dev target is working, need to create a production target with minified files
* Need to setup test runner
  