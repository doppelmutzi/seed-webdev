module.exports.tasks = {
	htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: true,
        removeRedundantAttributes: true,
        removeOptionalTags: true
      },
      file: {
        files: {
          src: ['index.html', 'html/**/*.html'],
          dest: "<%= project.dist %>",
          filter: {
            cwd: '<%= project.gen %>'
          }
        }  
      }
      
  }
}