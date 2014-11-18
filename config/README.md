# Grunt task configuration

Files placed in this folder represent task configurations swapped out from `Gruntfile.js`. The main purpose is to get `Gruntfile.js` short and readable. 

The different files, e.g., `cssmin.js` or `concat.json` hold the task configuration for the particular task.  Variables are defined in `Gruntfile.js` and are passed in order to reduce redundancy. For more information about the underlying `Grunt module` read [here &raquo;](https://github.com/creynders/load-grunt-configs).