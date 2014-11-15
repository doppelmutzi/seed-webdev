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

  
  // load from package.json (allows to skip grunt.loadNpmTasks(task) section)
  // load all grunt tasks matching the `grunt-*` pattern
 // require('load-grunt-tasks')(grunt);
 /**
  * Load in our build configuration file.
  */
 // var userConfig = require( './build.config.js' );
  
 //loads the various task configuration files
/*  var configs = require('load-grunt-configs')(grunt);
  grunt.initConfig(configs);
*/
  grunt.initConfig({

    // Metadata.
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
    },
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
    },
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['<%= project.js %>'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      },
      app_js: {
      	src: ['<%= project.js %>']	
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    /********************************************************************************************
    * Transcompiles SASS/Compass into CSS:
    * Transcompiles .scss files into .css files. Generated files by 'dist' target get 
    * compressed/minified. Generated files by 'dev' target are human-readable. 
    *********************************************************************************************/
    sass: {
      dev: {
        options: {
          style: 'expanded',
          banner: '<%= tag.banner %>',
      	  compass: true
        },
        files: {
          '<%= project.css %>/style.css': '<%= project.scss_file %>'
        }
      },
      dist: {
        options: {
          style: 'compressed',
          compass: true
        },
        files: {
          '<%= project.css %>/style.css': '<%= project.scss_file %>'
        }
      }
    },
    /********************************************************************************************
    * Minimize CSS files for distribution:
    * Transcompiles .slim files into .html files. Generated files by 'dist' target get minified.  
    * Generated files by 'dev' target are human-readable. 
    *********************************************************************************************/
    cssmin: {
      add_banner: {
        options: {
          banner: '/* My minified css file */'
        },
        files: {
          'dist/style.css': ['<%= project.css %>/**/*.css']
        }
      }
    },
    /********************************************************************************************
    * Transcompiles Slim files into HTML files:
    * Generated files by 'dist' target get minified.  
    * Generated files by 'dev' target are human-readable. 
    *********************************************************************************************/
    slim: {                              
      dist: {
        files: [{
          expand: true,
          cwd: '<%= project.slim %>',
          src: ['{,*/}*.slim'],
          dest: 'dist',
          ext: '.html'
        }]
      },
      dev: {                             
        options: {                       
          pretty: true
        },
        files: [{
          expand: true,
          cwd: '<%= project.slim %>',
          src: ['{,*/}*.slim'],
          dest: '<%= project.html %>',
          ext: '.html'
        }]
      }
    },
    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: true,
        removeRedundantAttributes: true,
        removeOptionalTags: true
      },
      compress: {
        src: "dist/index.html",
        dest: "dist/index.html"
      }
    },
    /********************************************************************************************
    * Watch task: Listens to file changes and triggers specified tasks
    *********************************************************************************************/
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'qunit']
      },
      app_js: {
        files: '<%= project.js %>',
	      tasks: ['jshint:app_js']
      },
      sass: {
        files: '<%= project.src %>/scss/{,*/}*.{scss,sass}',
        tasks: ['sass:dev']
      }
    }
  });
  /***************************************************************************** 
   * Register grunt tasks and define aliases
   *****************************************************************************/
  grunt.registerTask('prepare', ['jshint', 'concat', 'uglify']);
  grunt.registerTask('default', [
    'prepare',
    'sass:dev',
    'cssmin',
    'slim',
    'htmlmin',
    'watch'
  ]);
};
