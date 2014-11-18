module.exports.tasks = {
  	"uglify": {
      "options": {
        "banner": "<%= banner %>"
      },
      "dist": {
        "src": "<%= project.js_glob %>",
        "dest": "<%= project.js_dist %>/<%= pkg.name %>.min.js"
      }
    }
}