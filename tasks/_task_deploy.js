module.exports = function(grunt){
  grunt.registerTask('deploy', 'Deploying...', function(dumpType, environment){
      grunt.task.run(['build', 'shell:' + dumpType || 'patch:' + environment || 'staging', 'clean:build']);
  });
};
