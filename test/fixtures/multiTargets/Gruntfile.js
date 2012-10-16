module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    echo: {
      one: { message: 'one has changed' },
      two: { message: 'two has changed' },
      wait: { message: 'I waited 2s', wait: 2000 },
      interrupt: { message: 'I was interrupted', wait: 2000 },
    },
    watch: {
      one: {
        files: ['lib/one.js'],
        tasks: ['echo:one']
      },
      two: {
        files: ['lib/two.js'],
        tasks: ['echo:two']
      },
      wait: {
        files: ['lib/wait.js'],
        tasks: ['echo:wait']
      },
      interrupt: {
        files: ['lib/interrupt.js'],
        tasks: ['echo:interrupt'],
        options: { interrupt: true }
      }
    }
  });
  // Load the echo task
  grunt.loadTasks('../tasks');
  // Load this watch task
  grunt.loadTasks('../../../tasks');
  grunt.registerTask('default', ['echo']);
};