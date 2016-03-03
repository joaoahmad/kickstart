module.exports = function(grunt){
    grunt.config('concurrent', {

        watches: {
            tasks: ['watch:styles','browserSync:dev'],
            options: {
                logConcurrentOutput: true
            }
        },

        // scripts: {
        //     files: ['js/app/**/*.js', 'js/app/**/*.jsx', 'js/app/**/*.hbs'],
        //     tasks: ['browserify:dev']
        // },

    });
};
