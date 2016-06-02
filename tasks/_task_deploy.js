module.exports = function(grunt){
  grunt.registerTask('deploy', , function(dumpType, environment){
      grunt.task.run(['build', 'shell:' + dumpType || 'patch:' + environment || 'staging', 'clean:build']);
  });
};
