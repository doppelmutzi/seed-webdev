/********************************************************************************************
* Watches project folders
* Listens to file changes and triggers specified tasks
*********************************************************************************************/  
module.exports.tasks = {
	watch: {
		gruntfile: {
			files: '<%= jshint.gruntfile.src %>',
			tasks: ['jshint:gruntfile']
		},
		app_js: {
			files: '<%= project.js %>',
			tasks: ['jshint:app_js']
		},
		app_sass: {
			files: ['<%= project.src %>/{,*/}*.{scss,sass}'],
			tasks: ['sass']
		},
		app_slim: {
			files: ['<%= project.slim %>/index.slim', '<%= project.slim_includes %>/*.slim'],
			tasks: ['slim']
		}
    }
}