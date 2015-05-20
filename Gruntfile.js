// compile sass
module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'index.css': 'sass/index.scss'
        }
      }
    },
    watch: {
      scripts: {
        files: ['sass/*'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['sass']);
  grunt.loadNpmTasks('grunt-contrib-watch');
};
