module.exports = function(grunt){
    grunt.config('copy', {

        build: {
            files: [
                {
                    expand: true,
                    dots: true,
                    src: [
                        '**/*',
                        '**/.htaccess',
                        '!**/*.sass',
                        '!node_modules/**',
                        //'!node_modules/**/.*',
                        '!tasks/**',
                        '!**/.DS_Store',
                        //'!.git',
                        //'!.gitignore',
                        //'!.gitattributes',
                        '!.editorconfig',
                        '!.sass-cache',
                        '!Gruntfile.js',
                        '!package.json',
                        '!build.xml',
                        '!build.properties',
                        '!composer.json',
                        '!CONTRIBUTING.md',
                    ],

                    dest: 'build/'
                },
            ],
        },

    });
};
