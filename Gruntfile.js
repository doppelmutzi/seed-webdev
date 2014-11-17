/*global module:false*/
module.exports = function(grunt) {

  /***************************************************************************** 
   * Load required Grunt tasks. These are installed based on the versions listed
   * in `package.json` when you do `npm install` in this directory.
   *****************************************************************************/
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-slim');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  /********************************************************************************************
  * Object holds data required by swapped out task configuration files located at config folder.   
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
      app: 'app',
      assets: '<%= project.app %>/assets',
      src: '<%= project.assets %>/src',
      gen: '<%= project.assets %>/generated',
      css: '<%= project.gen %>/css',
      // SASS-related folders
      scss: '<%= project.src %>/scss',
      scss_file: [
          '<%= project.scss %>/style.scss'
      ],
      js: [
          '<%= project.src %>/js/*.js'
      ],
      slim: '<%= project.src %>/slim',
      html: '<%= project.gen %>/html'
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
  grunt.registerTask('css', ['sass:dev', 'cssmin']);
  grunt.registerTask('html', ['slim', 'htmlmin']);
  grunt.registerTask('default', ['js', 'css', 'html', 'watch']);
};
