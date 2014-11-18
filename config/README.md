# Grunt task configuration

Files placed in this folder represent task configurations swapped out from `Gruntfile.js`. The main purpose is to get `Gruntfile.js` short and readable. 

The different files, e.g., `cssmin.js` or `concat.json` hold the task configuration for the particular task.  Variables are defined in `Gruntfile.js` and are passed in order to reduce redundancy. For more information about the underlying `Grunt module` read [here &raquo;](https://github.com/creynders/load-grunt-configs).

In general, a Javascript configuration is provided by a file with a file extension `.js`. The following code displays an extract of a HTML minimizing task that is defined in a Javascript file. The task `htmlmin` can be used in `Gruntfile.js`.

```js
module.exports.tasks = {
	htmlmin: {
      options: {
        removeComments: true,
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
```

There are also other file formats, e.g., `.json` possible. For more information refer [load-grunt-configs documentation &raquo;](https://github.com/creynders/load-grunt-configs).