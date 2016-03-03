module.exports = function(grunt){
    grunt.config('browserSync', {

        dev: {
            bsFiles: {
                src : [
                    'css/*.css',
                    'js/*.js',
                    '*.html',
                ]
            },
            options: {
                proxy: "localhost:8888/braseiro-americas"
            }
        }

    });
};
