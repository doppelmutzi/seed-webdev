
module.exports.tasks = {
	copy: {
	  html_gen: {
	    files: [
	      {expand: true, flatten: true, filter: "isFile", cwd: "<%= project.src %>", src: ['**/*.html'], dest: '<%= project.gen %>/'}
	    ]
	  }
	}
}