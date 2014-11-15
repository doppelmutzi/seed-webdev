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


## Roadmap / Things to do

This project is work in progress. The list of things planned are listed here:

- refactor current folder structure and Gruntfile.js to reflect the overall directory structure as described below.
- move out paths variables into seperate config file that gets included into Gruntfile.js
- finalize all README.md files
- finalize SLIM/HTML workflow representing the view part of the application
- finalize Javascript workflow and example structure
- insert example resources and use them
- Create a Grunt grunt-init / scaffolding template that can geneated the whole folder structure with and without boilderplate/example files
- evaluate whether and how to include yeoman

Maybe:

- include angular.js
- include karma

For tec talk:

- walktrough this project / build process (dev, distrub)
- integration with maven / jenkins
- Verweiß auf grunt / bower im Detail (wie hier vorgegangen) tec talk Januar
- SASS im Detail zeigen (install, Verwenden, grunt workflow)
- Compass im Detail zeigen (install, Verwenden, grunt workflow)
- Compass spriting
- Bootstrap zeigen (Grid System / RWD technik), lessons learnt, siehe gebookmarkte blogs
- Bootstrap + Sass -> Trennung RWD/Layout von View -> lose Kopplung, leicht austauschbar, problemlos wenn sich bootstrap stark ändern würde
- Ggf CSS pitfalls: horizontal und vertical aligment

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
  |  |  |- generated/
  |  |  |  |- css/
  |  |  |  |  |- style.css
  |  |  |  |  |- style.css.map
  |  |  |  |- html/
  |  |  |  |  |- index.html
  |  |  |  |- js/
  |  |  |  |  |- app.js
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
  |  |  |- resources/
  |  |  |  |- images/
  |  |  |  |- <other static resources>
  |- bower_components/
  |  |- bootstrap-sass-official/
  |  |- fontawesome/
  |  |- jquery/
  |  |- <more bower comonents>
  |- dist/
  |  |- css/
  |  |  |- style.min.css
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
their own `README.md` file with additional documentation.

- `app/assets/src` - our application sources. [Read more &raquo;](app/assets/src/README.md)  
- `app/assets/generated` - The application sources get processed (transcompiled, concatenated, etc.) and put here. [Read more &raquo;](app/assets/generated/README.md)
- `app/assets/resources` - Static resources, e.g., images, sound files, come here
- `bower_components/` - third-party libraries. [Bower](http://bower.io) will install packages here. This folder is not under version control (see `.gitignore`). Based on `bower.json` file, this folder gets automatically created and populated by invoking the following the following command in the project root folder:
```sh
$ bower install
```
- `bower.json` - this is our project configuration for Bower and it contains the list of Bower dependencies we need. Dependencies get added by invoking `bower install` as the following example command shows:
```sh
$ bower install --save-dev font-awesome
```
- `dist/` - the release / build folder. The final application deployment is located here. Files from `app/` (transcompiled, minified, uglified, concatenated, etc.) are put here. [Read more &raquo;](dist/README.md) 
- `node_modules/` - Node modules are located here. This folder is not under version control (see `.gitignore`). Based on `package.json` file, this folder gets automatically created and popultaed by invoking the following command in the project root folder:
```sh
$ npm install
```
- `Gruntfile.js` - our build script; see "The Build System" below.
- `package.json` - metadata about the application, used by NPM and our build script. Our
  NPM dependencies are listed here. Dependencies get added by infoking `npm install`as the following example command shows:
  ```sh
npm install --save-dev grunt-contrib-cssmin grunt-contrib-htmlmin grunt-slim
  ```

## Utilized technologies

## The Build System

### Grunt modules overview

### Bower components overview