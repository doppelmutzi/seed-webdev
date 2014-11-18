/********************************************************************************************
* Minimize CSS files for distribution:
* Transcompiles .slim files into .html files. Generated files by 'dist' target get minified.  
* Generated files by 'dev' target are human-readable. 
*********************************************************************************************/
module.exports.tasks = {
 "cssmin": {
    "add_banner": {
      "options": {
        "banner": "/* My minified css file */"
      },
      "files": {
        "<%= project.css_dist %>/style.css": ["<%= project.css_gen %>/**/*.css"]
      }
    }
  }
}