module.exports.tasks = {
  	"uglify": {
      "options": {
        "banner": "<%= banner %>"
      },
      "dist": {
        "src": "<%= project.js %>",
        "dest": "dist/<%= pkg.name %>.min.js"
      }
    }
}