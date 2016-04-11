module.exports = function(grunt){
    grunt.config('imagemin', {

        build: {
            files: [{
                expand: true,
                cwd: 'build/',
                src: ['images/*.{png,jpg,gif}'],
                dest: 'build/'
            }]
        },

    });
};
