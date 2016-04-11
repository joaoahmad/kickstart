module.exports = function(grunt){
    grunt.config('uglify', {

        build: {
            options: {
                sourceMap: false,
            },
            files: [{
                expand: true,
                src: ['build/**/*.js', '!build/**/*.min.js'],
            }]
        },

    });
};
