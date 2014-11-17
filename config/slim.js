/********************************************************************************************
* Transcompiles Slim files into HTML files:
* Generated files by 'dist' target get minified.  
* Generated files by 'dev' target are human-readable. 
*********************************************************************************************/    
module.exports.tasks = {
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
    }
}