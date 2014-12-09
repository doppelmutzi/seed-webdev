/********************************************************************************************
* Copy files from source to target
*********************************************************************************************/
module.exports.tasks = {
  copy: {
    sprite: {
      files: [
        // includes files within path
        {expand: true, src: ['<%= project.sprites %>/**/*.png'], dest: '<%= project.sprites_gen %>'}
      ],
    },
  }
}