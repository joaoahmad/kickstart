module.exports = function(grunt){
    grunt.config('cssmin', {

        build: {
            files: [{
                expand: true,
                src: ['build/**/*.css', '!build/**/*.min.css'],
            }]
        },

    });
};
