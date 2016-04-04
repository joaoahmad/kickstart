module.exports = function(grunt){
    grunt.config('class-id-minifier', {

        build: {
            files: [
                {
                    expand: true,
                    cwd: '',
                    src: '**/*.{html,css}',
                    dest: 'tmp/'
                }
            ]
        },

    });
};
