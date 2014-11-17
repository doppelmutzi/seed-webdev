/*global module:false*/
module.exports = {
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
    
    	app: 'app',
    	assets: '<%= project.app %>/assets',
    	src: '<%= project.assets %>/src',
      gen: '<%= project.assets %>/generated',
      css: '<%= project.gen %>/css',
      // SASS
      scss: '<%= project.src %>/scss',
      scss_file: [
      		'<%= project.scss %>/style.scss'
    	],
    	js: [
      		'<%= project.src %>/js/*.js'
      ],
      slim: '<%= project.src %>/slim',
      html: '<%= project.gen %>/html'
    
};
