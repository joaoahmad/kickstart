module.exports = function(grunt){
  grunt.registerTask('deploy:staging', ['build', 'shell:staging', 'clean:build']);
  grunt.registerTask('deploy:production', ['build', 'shell:production', 'clean:build']);
};
