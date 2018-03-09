module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // concurrent
    concurrent: {
      tasks: ['browserSync', 'watch'],
      options: {
        logConcurrentOutput: true,
      }
    },

    // browserSync
    browserSync: {
      bsFiles: {
        src : [
          'css/*.css',
          'js/*.js',
          '*.html',
        ],
      },
      options: {
        server: {
          baseDir: "./"
        }
      }
    },

    // watch
    watch: {
      options: {
        spawn: false // add spawn option in watch task
      },
      style: {
        files: ['css/scss/**/*.sass', 'css/scss/**/*.scss'],
        tasks: ['sass', 'postcss']
      }
    },

    // sass
    sass: {
      default: {
        options: {
          style: 'expanded',
        },
        files: [{
          expand: true,
          cwd: 'css/scss',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },

    // postcss
    postcss: {
      default: {
        options: {
          map: true,
          processors: [
            require('pixrem')(),
            require('autoprefixer')({browsers: '> 1%, last 2 versions, Firefox ESR, Opera 12.1'}),
          ]
        },
        src: 'css/main.css'
      },
    },

    // cssmin
    cssmin: {
      default: {
        files: [{
          expand: true,
          cwd: './css',
          src: ['*.css', '!*.min.css'],
          dest: './css',
          ext: '.min.css'
        }]
      }
    },
  });

  grunt.registerTask('default', ['concurrent']);

  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
};
