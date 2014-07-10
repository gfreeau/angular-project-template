module.exports = function(grunt) {
    var options = {
        config : {
            src: [
                'config/**/*.js*'
            ]
        }
    };

    var configs = require('load-grunt-configs')(grunt, options);
    grunt.initConfig(configs);

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['build', 'connect:server', 'watch']);

    grunt.registerTask('build', ['sync:dev', 'delete_sync:dev', 'compass:dev', 'injector:dev']);
};