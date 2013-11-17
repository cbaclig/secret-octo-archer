module.exports = (grunt) ->
  # load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach grunt.loadNpmTasks

  grunt.initConfig

    coffee:
      options:
        bare: true
        sourceMap: false # change to true for debugging
        sourceRoot: "."
      client:
        files: [
          {
            expand: true
            flatten: false
            cwd: 'src'
            src: '**/*.litcoffee'
            dest: 'lib'
            ext: '.js'
          }
        ]

    grunt.registerTask 'default', [
      'coffee'
    ]
