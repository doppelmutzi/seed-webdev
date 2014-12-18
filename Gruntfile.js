/*global module:false*/
module.exports = function(grunt) {

   /***************************************************************************** 
   * Load required Grunt tasks. These tasks are installed based on the versions listed
   * in `package.json` when you do `npm install` in this directory.
   *
   * No explicit `grunt.loadNpmTasks()` calls are required. 
   * The following command loads in all Grunt tasks specified in `package.json`.
   *****************************************************************************/
  require('load-grunt-tasks')(grunt);

  /********************************************************************************************
  * This object holds data required by swapped out task configuration files located at
  * `config/` folder.  
  *********************************************************************************************/   
  var options = {
    /********************************************************************************************
    * The 'project' object defines objects that hold information  (paths, glob patterns, etc.) 
    * that need to be referenced from module's task definitions in order to reduce redundancy.
    * The following naming conventions exist:
    * - <name>: The value represents a path to a folder
    * - <name>_file: The value represents a specific file
    * - <name>_glob: The value represents a glob pattern
    * - <name>_dev and <name>_dist: The value communicates that the value is meant for the development 
    *  or build/distribution workflow, respectively.   
    *********************************************************************************************/
    project: {
      // project src/target folders
      app: 'app',
      assets: '<%= project.app %>/assets',            
      src: '<%= project.assets %>/src',
      gen: '<%= project.assets %>/generated',
      dist: 'dist',
      // CSS related
      css_gen: '<%= project.gen %>/css',
      css_dist: '<%= project.dist %>/css',
      scss: '<%= project.src %>/scss',
      // Actual file that is used by the system. All other SASS files need to be included into this one.
      scss_file: [
          '<%= project.scss %>/style.scss'
      ],
      scss_print_file: [
        '<%= project.scss %>/print.scss'
      ],
      // Javascript related
      js: ['<%= project.src %>/js'],
      js_glob: ['<%= project.js %>/**/*.js'],
      js_gen: '<%= project.gen %>/js',
      js_dist: '<%= project.dist %>/js',
      // SLIM / HTML related
      // Folder for root view / index.slim. This is meant as entry point of app
      slim: '<%= project.src %>',      
      // the other views / partials etc.
      slim_includes: '<%= project.src %>/slim',
      html: '<%= project.gen %>/html',
      html_dist: '<%= project.dist %>/html'
    },
    /********************************************************************************************
    * Defines banner that can be put on top of assets during task processing.
    * Reads in information from package.json file to set values of banner.   
    *********************************************************************************************/   
    pkg: grunt.file.readJSON('package.json'),
    tag: {
      banner: '/*!\n' +
          ' * <%= pkg.name %>\n' +
          ' * <%= pkg.title %>\n' +
          ' * <%= pkg.url %>\n' +
          ' * @author <%= pkg.author %>\n' +
          ' * @version <%= pkg.version %>\n' +
          ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
          ' */\n'
    }
  };

  /********************************************************************************************
  * Loads the various task configuration files (i.e., task registrations and configurations) 
  * located at config folder.
  * All task registration is meant to be swapped out from this file into individual files.
  * Objects required in swapped out files can be passed in via options parameter.
  *********************************************************************************************/   
  var configs = require('load-grunt-configs')(grunt, options);
  grunt.initConfig(configs);
  
  /***************************************************************************** 
   * Registers tasks and defines aliases
   * Connects 'atomar' tasks defined in files located at config folder.
   *****************************************************************************/
  grunt.registerTask('js', ['jshint', 'concat', 'uglify']);
  grunt.registerTask('css', ['sass:dev']);
  grunt.registerTask('html', ['slim', 'htmlmin']);
  grunt.registerTask('default', ['js', 'css', 'html', 'copy', 'watch']);
};
