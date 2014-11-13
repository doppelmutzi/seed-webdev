# Information about the thoughts behind the structure and workflow of the web development project 

## Quick Start

Install Node.js and then:

```sh
$ git clone git://git.netpioneer.de/sweber/seed-webdev
$ cd seed-webdev
$ sudo npm -g install grunt-cli bower
$ npm install
$ bower install
$ grunt
```

Finally, open `file:///path/to/seed-webdev/dist/index.html` in your browser.


## Purpose

Constitutes a web development kickstarter. Provides a Grunt-powered development workflow that leverages SASS/Compass and the SASS-version of Bootstrap. Instead of writing conventional HTML code, SLIM can be used to develop the views. 

## Philosophy

## Overall Directory Structure

At a high level, the structure looks roughly like this:

```
seed-webdev/
  |- .gitignore
  |- .sass-cache/
  |- app/
  |  |- assets/
  |  |  |- transcompiled/
  |  |  |  |- css/
  |  |  |  |  |- style.css
  |  |  |  |  |- style.css.map
  |  |  |  |- html/
  |  |  |  |  |  |- index.html
  |  |  |- src/
  |  |  |  |- slim/
  |  |  |  |  |- index.slim
  |  |  |  |- js/
  |  |  |  |  |- <js code structure>
  |  |  |  |  |- tests/
  |  |  |  |  |   |- <unit tests>
  |  |  |  |- scss/
  |  |  |  |  |- _bootstrap.scss
  |  |  |  |  |- _variables.scss
  |  |  |  |  |- style.scss
  |  |  |  |  |  |- custom/
  |  |  |  |  |  |  |- main.scss
  |  |  |  |  |  |  |- <more scss files>
  |  |- resources/
  |  |  |  |- images/
  |  |  |  |- <other static resources>
  |- bower_components/
  |  |- bootstrap-sass-official/
  |  |- fontawesome/
  |  |- jquery/
  |  |- <more bower comonents>
  |- dist/
  |  |- css/
  |  |- js/
  |  |- resources/
  |  |- index.html
  |- node_modules/
  |  |- grunt/
  |  |- grunt-contrib-concat/
  |  |- <more grunt modules>
  |- bower.json
  |- Gruntfile.js
  |- package.json
  |- README.md
```

What follows is a brief description of each entry, but most directories contain
their own `README.md` file with additional documentation, so browse around to
learn more.

- `karma/` - test configuration.
- `src/` - our application sources. [Read more &raquo;](src/README.md)
- `vendor/` - third-party libraries. [Bower](http://bower.io) will install
  packages here. Anything added to this directory will need to be manually added
  to `build.config.js` and `karma/karma-unit.js` to be picked up by the build
  system.
- `.bowerrc` - the Bower configuration file. This tells Bower to install
  components into the `vendor/` directory.
- `bower.json` - this is our project configuration for Bower and it contains the
  list of Bower dependencies we need.
- `build.config.js` - our customizable build settings; see "The Build System"
  below.
- `Gruntfile.js` - our build script; see "The Build System" below.
- `module.prefix` and `module.suffix` - our compiled application script is
  wrapped in these, which by default are used to place the application inside a
  self-executing anonymous function to ensure no clashes with other libraries.
- `package.json` - metadata about the app, used by NPM and our build script. Our
  NPM dependencies are listed here.

## Grunt modules overview

## Bower components overview