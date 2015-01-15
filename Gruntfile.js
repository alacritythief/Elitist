var ENV = process.env.NODE_ENV;

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  var libraries = [
  'react/addons',    // React
  'miniflux',        // Flux
  'lodash',          // Functional Helpers
  // OPTIONAL
  // ========
  // 'superagent'       // requests:  npm install --save superagent
  // 'es6-promise',  // promises:  npm install --save es6-promise
  // 'idb-wrapper',  // indexedDB: npm install --save idb-wrapper
  // 'jquery',       // jquery:    npm install --save jquery
  // 'events',       // events:    npm install --save events
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      libs: {
        options: {
          require: libraries
          // transform: ['uglifyify'] // Uncomment for production builds
        },
        src: [],
        dest: 'client/dist/lib.js'
      },
      src: {
        options: {
          external: libraries,
          transform: [['reactify', {es6: true}], 'brfs'],
          watch: true
        },
        src: ['client/src/js/**/*.js'],
        dest: 'client/dist/app.js'
      }
    },
    copy: {
      fonts: {
        files: [{
          expand: true,
          cwd: 'client/fonts',
          src: ['**'],
          dest: 'client/dist/fonts/'
        }]
      }
    },
    stylus: {
      base: {
        options: {
          compress: ENV === 'production' ? true : false
        },
        files: [{
          expand: true,
          cwd: 'client/src/css',
          src: ['**/*.styl','!**/_*.styl'],
          dest: 'client/dist',
          ext: '.css'
        }]
      }
    },
    watch: {
      options: {
        livereload: grunt.option('reload') || true
      },
      styles: {
        files: ['client/src/**/*.styl'],
        tasks: ['stylus']
      },
      templates: {
        files: ['**/*.html'],
        tasks: [] // empty for livereload
      }
    }
  });

  grunt.registerTask('default', [
  'browserify',
  'stylus',
  'copy',
  'watch'
  ]);
};
