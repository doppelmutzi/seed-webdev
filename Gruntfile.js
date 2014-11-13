/*global module:false*/
module.exports = function(grunt) {

  // load from package.json (allows to skip grunt.loadNpmTasks(task) section)
  // load all grunt tasks matching the `grunt-*` pattern
 // require('load-grunt-tasks')(grunt);

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
	
    project: {
  	app: 'app',
  	assets: '<%= project.app %>/assets',
  	src: '<%= project.assets %>/src',
  	css: [
    		'<%= project.src %>/scss/style.scss'
  	],
  	js: [
    		'<%= project.src %>/js/*.js'
  	]
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
    sass: {
      dev: {
        options: {
          style: 'expanded',
          banner: '<%= tag.banner %>',
      	  compass: true
        },
        files: {
          '<%= project.assets %>/css/style.css': '<%= project.css %>'
        }
      },
      dist: {
        options: {
          style: 'compressed',
          compass: true
        },
        files: {
          '<%= project.assets %>/css/style.css': '<%= project.css %>'
        }
      }
    },
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

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  
  grunt.registerTask('prepare', ['jshint', 'concat', 'uglify']);
  grunt.registerTask('default', [
    'prepare',
    'sass:dev',
    'watch'
  ]);
};
