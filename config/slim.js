/********************************************************************************************
* Transcompiles Slim files into HTML files:
* Generated files by 'dist' target get minified.  
* Generated files by 'dev' target are human-readable. 
*********************************************************************************************/    
module.exports.tasks = {
	slim: {                              
		main_file: {
			files: [{
			  expand: true,
			  cwd: '<%= project.slim %>',
			  src: ['{,*/}*.slim'],
			  dest: '<%= project.gen %>',
			  ext: '.html'
			}]
	    },
		other_files: {                             
			options: {                       
				pretty: true
			},
			files: [{
				expand: true,
				cwd: '<%= project.slim_includes %>',
				src: ['{,*/}*.slim'],
				dest: '<%= project.html %>',
				ext: '.html'
			}]
		}
    }
}