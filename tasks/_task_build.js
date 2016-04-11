module.exports = function(grunt){
  grunt.registerTask('build', ['clean:build','copy:build','cssmin:build','uglify:build','imagemin:build']);
};
