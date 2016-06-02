module.exports = function(grunt){
    grunt.config('shell', {

        staging: {
            command: 'git checkout master && grunt bump && dandelion deploy',
        },
        production: {
            command: 'echo "PRODUCTION ..."',
        },

    });
};
