# Information about the thoughts behind the structure and workflow for developing frontend projects 

## Quick Start

Install `Ruby` andd `Node.js` and then:

```sh
$ git clone git://git.netpioneer.de/sweber/seed-webdev
$ cd seed-webdev
$ sudo npm -g install grunt-cli bower
$ npm install
$ bower install
$ gem install slim
$ grunt
```

The built files are located at `file:///path/to/seed-webdev/dist/`. 

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
  |  |  |  |- index.slim
  |  |  |  |- slim/
  |  |  |  |  |- <slim files>
  |  |  |  |- js/
  |  |  |  |  |- <js code structure>
  |  |  |  |  |- tests/
  |  |  |  |  |   |- <unit tests>
  |  |  |  |- scss/
  |  |  |  |  |- _bootstrap.scss
  |  |  |  |  |- _variables.scss
  |  |  |  |  |- style.scss
  |  |  |  |  |- custom/
  |  |  |  |  |  |- main.scss
  |  |  |  |  |  |- <more scss files>
  |  |- resources/
  |  |  |  |- images/
  |  |  |  |- <other static resources>
  |- bower_components/
  |  |- bootstrap-sass-official/
  |  |- fontawesome/
  |  |- jquery/
  |  |- <more bower comonents>
  |- config/
  |  |- README.md
  |  |- concat.json
  |  |- cssmin.js
  |  |- htmlmin.js
  |  |- jshint.json
  |  |- sass.js
  |  |- slim.js
  |  |- uglify.js
  |  |- watch.js
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

- `app/assets/src` - our application sources. Javascript, CSS, and SLIM files are located in the particular sub folder `slim`, `js`, and `scss`. `index.slim` constitutes the main view of the application. [Read more &raquo;](app/assets/src/README.md)  
- `app/assets/generated` - The application sources get processed (transcompiled, concatenated, etc.) and put here. [Read more &raquo;](app/assets/generated/README.md)
- `app/assets/resources` - Static resources, e.g., images, sound files, come here
- `bower_components/` - third-party libraries. [Bower](http://bower.io) will install packages here. This folder is not under version control (see `.gitignore`). Based on `bower.json` file, this folder gets automatically created and populated by invoking the following the following command in the project root folder:
```sh
$ bower install
```
- `config/` - This folder contains Grunt task registration/configuration files that are swapped out from `Gruntfile.js` in order to establish a better maintainability since `Gruntfile.js` is very short and readable. [Read more &raquo;](config/README.md)
- `bower.json` - this is our project configuration for Bower and it contains the list of Bower dependencies we need. Dependencies get added by invoking `bower install` as the following example command shows:
```sh
$ bower install --save-dev font-awesome
```
- `dist/` - the release / build folder. The final application deployment is located here. Files from `app/` (transcompiled, minified, uglified, concatenated, etc.) are put here. [Read more &raquo;](dist/README.md) 
- `node_modules/` - Node modules are located here. This folder is not under version control (see `.gitignore`). Based on `package.json` file, this folder gets automatically created and popultaed by invoking the following command in the project root folder:
```sh
$ npm install
```
- `.gitignore` - Excludes auto-generated content: bower components, node modules, .sass-cache, IDE-related files, and generated assets (e.g., .css files created from .scss files)
- `Gruntfile.js` - our build script; see "The Build System" below.
- `package.json` - metadata about the application, used by NPM and our build script. In addition, the information stored in this file are used during Grunt workflow, e.g., to generate banners that are put on top of generated files. Our
  NPM dependencies are listed here. Dependencies get added by infoking `npm install`as the following example command shows:
  ```sh
npm install --save-dev grunt-contrib-cssmin grunt-contrib-htmlmin grunt-slim
  ```

## Utilized technologies

`Grunt` is utilized for establishing a automated frontend development workflow. Different Grunt modules are used for processing source assets into build / distribution assets, e.g., minifying CSS files that are transcompiled from SASS files authored by the developer. `NPM` is used for managing Grunt plugins / modules.


`Bower`is used as package manager for frontend libraries, such as Bootstrap. 

This seed project is configured to utilize the following frontend development technolgies:

- `SASS` - Is a scripting language that is interpreted into Cascading Style Sheets (CSS). [official website &raquo;](http://sass-lang.com/)
- `Compass` - Is a CSS3 authoring framework based on SASS [official website &raquo;](http://compass-style.org/)
- `Bootstrap`- Its purpose is to create responsive views that displays the content optimized dependent on the current device / view size. The SASS version of Bootstrap is used in order to have a better seperation between views (i.e., HTML) and style (i.e., CSS) by using mixings that include the required Bootstrap classes (e.g., `row`, `col-lg-12`) during transcompilation into the generated CSS files. [official website &raquo;](http://getbootstrap.com/)
- `SLIM`-  Is a template language whose goal is to reduce the HTML view syntax [official website &raquo;](http://slim-lang.com/)

## The Build System

Building the system is based on `Grunt` [official website &raquo;](http://gruntjs.com/). It is a task runner based on `Node.js [official website &raquo;](http://nodejs.org/). `NPM` package manager is used for installing Grunt modules. 

`Bower` is used for building the Web / Browser dependencies. It constitutes a package manager for frontend dependencies [official website &raquo;](http://bower.io/). 

The workflow is defined in `Gruntfile.js`. The file is kept short by swapping out task registration / configuration into seperate files located at `config/` folder. Please refer `config/README.md` for further information. 

There exists task registrations for every `asset type`: Javascript, CSS, and HTML. The general concept is that development takes place in `app/assets/src/` folder. There, the developer works with SASS files instead of CSS or SLIM files instead of HTML in order to improve productivity and maintainability. These files are transcompiled into concrete CSS and HTML files, respectively. In the next step, these files along with Javascript files located at `app/assets/src/js/` are prepared for distribution. This includes processing tasks, such as uglifying, minifing, concatenating, etc. In the end, the processed files are copied to the 
target folder `dist/` that represents the distribution / production folder.

### Grunt modules overview

Please refer `config/README.md` for information about modules used for task registration / configuration during Grunt workflow. The other Grunt modules are briefly 
described below:

- `load-grunt-tasks` - Automates loading of Grunt modules / tasks. No more explicit `loadNpmTasks` calls required in `Gruntfile.js`. [official website &raquo;](https://github.com/sindresorhus/load-grunt-tasks)
- `load-grunt-configs` - Allows splitting your grunt task configuration into separate files. [official website &raquo;](https://github.com/creynders/load-grunt-configs)

### Bower components overview

- `bootstrap-sass-official` - Offical SASS port of Bootstrap [official website &raquo;](http://getbootstrap.com/css/#sass)
- `fontawesome` - Is an iconic font developed for use with the Bootstrap front-end framework [official website &raquo;](http://fortawesome.github.io/Font-Awesome/)
- `jquery` - Is required by `bootstrap-sass-official`. It is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML [official website &raquo;](http://jquery.com/)

## Roadmap / Things to do

This project is work in progress. The list of things planned are listed here:

- tasks registrieren für dev und build workflow
- finalize all README.md files
- insert example resources die nach gen und dist kopiert werden
- Create a Grunt grunt-init / scaffolding template that can geneated the whole folder structure with and without boilderplate/example files
- evaluate whether and how to include yeoman

Maybe:

- include angular.js
- include karma

For tec talk:

- walktrough this project / build process (dev, dist)
- integration with maven / jenkins
- Verweiß auf grunt / bower im Detail (wie hier vorgegangen) tec talk Januar
- SASS im Detail zeigen (install, Verwenden, grunt workflow)
- Compass im Detail zeigen (install, Verwenden, grunt workflow)
- Compass spriting
- Bootstrap zeigen (Grid System / RWD technik), lessons learnt, siehe gebookmarkte blogs
- Bootstrap + Sass -> Trennung RWD/Layout von View -> lose Kopplung, leicht austauschbar, problemlos wenn sich bootstrap stark ändern würde
- Ggf CSS pitfalls: horizontal und vertical aligment
- http://t3n.de/news/basics-responsive-webdesign-9-578560/?utm_content=buffer70daa&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer

