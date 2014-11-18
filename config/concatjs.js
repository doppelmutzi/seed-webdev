module.exports.tasks = {
	"concat": {
      "options": {
        "banner": "<%= banner %>",
        "stripBanners": true
      },
      "dev": {
        "src": ["<%= project.js_glob %>"],
        "dest": "<%= project.js_gen %>/<%= pkg.name %>.js"
      },
      "dist": {
        "src": ["<%= project.js_glob %>"],
        "dest": "<%= project.js_dist %>/<%= pkg.name %>.js"
      }
    }
}