module.exports = function(grunt){
    grunt.config('shell', {

        staging: {
            command: 'dandelion deploy',
        },
        production: {
            command: 'echo "PRODUCTION ..."',
        },

    });
};
