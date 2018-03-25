module.exports = function (grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      nodemon: {
            default: {
                script: 'server.js',
                ignore: ['node_modules/**', 'public/**','./Gruntfile.js'],
                watch: ['server'],
    				    options: {
                    nodeArgs: ['--debug'],
                    delay: 2000
    				    }
            }
      },
      clean : {
          dineo : {
                src : [ 'apidoc/**']
            }
        },
      apidoc: {
          myapp: {
              src: "api/",
              dest: "apidoc/",
              options: {
                  debug: true,
                  includeFilters: [ ".*\\.js$" ],
                  excludeFilters: [ "node_modules/" ]
                }
          }
        }
  });
  grunt.registerTask('default', ['nodemon']);
  grunt.registerTask('gendoc', ['clean','apidoc:myapp']);
};
