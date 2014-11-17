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
		sass: {
			files: '<%= project.src %>/scss/{,*/}*.{scss,sass}',
			tasks: ['sass:dev']
		}
    }
}