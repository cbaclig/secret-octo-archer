module.exports = (grunt) ->
  # load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach grunt.loadNpmTasks

  grunt.initConfig

    clean:
      client: ['dist/']

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
            cwd: 'client'
            src: '**/*.litcoffee'
            dest: 'dist/client'
            ext: '.js'
          }
        ]

    grunt.registerTask 'default', [
      'clean'
      'coffee'
    ]
