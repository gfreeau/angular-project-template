module.exports = function(grunt) {
    var userConfig = require('./build.config.js');

    var taskConfig = {
        watch: {
            options: {
                livereload: true
            },

            gruntfile: {
                files: 'Gruntfile.js',
                // automatically reloads grunt when this file changes
                tasks: ['build']
            },

            buildConfig: {
                files: 'build.config.js',
                options: {
                    reload: true
                },
                tasks: ['build']
            },

            appSources: {
                files: [
                    '<%= appConfig.appFiles.html %>',
                    '<%= appConfig.appFiles.js %>'
                ],
                tasks: ['build']
            },

            appStyles: {
                files: [
                    '<%= appConfig.appFiles.css %>'
                ],
                tasks: ['build']
            }
        },

        clean: {
            dev: '<%= appConfig.dirs.build.dev %>',
            prod: '<%= appConfig.dirs.build.prod %>'
        },

        sync: {
            dev: {
                files: [
                    {
                        expand: true,
                        src: [
                            '<%= appConfig.appFiles.js %>',
                            '<%= appConfig.appFiles.css %>',
                            '<%= appConfig.vendorFiles.js %>',
                            '<%= appConfig.vendorFiles.css %>'
                        ],
                        dest: '<%= appConfig.dirs.build.dev %>'
                    },
                    {
                        expand: true,
                        src: [
                            '<%= appConfig.appFiles.css %>'
                        ],
                        dest: '<%= appConfig.dirs.build.dev %>'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            '<%= appConfig.appFiles.html %>'
                        ],
                        dest: '<%= appConfig.dirs.build.dev %>'
                    }
                ]
            }
        },

        delete_sync: {
            dev: {
                files: [
                    {
                        cwd: '<%= appConfig.dirs.build.dev %>',
                        src: [
                            '<%= appConfig.appFiles.html %>'
                        ],
                        syncWith: 'src'
                    },
                    {
                        cwd: '<%= appConfig.dirs.build.dev %>/src',
                        src: [
                            '**/*.js'
                        ],
                        syncWith: 'src'
                    },
                    {
                        cwd: '<%= appConfig.dirs.build.dev %>/vendor',
                        src: [
                            '**/*.js',
                            '**/*.css'
                        ],
                        syncWith: 'vendor'
                    }
                ]
            }
        },

        injector: {
            dev: {
                options: {
                    ignorePath: '<%= appConfig.dirs.build.dev %>',
                    template: '<%= appConfig.dirs.build.dev %>/index.html',
                    destFile: '<%= appConfig.dirs.build.dev %>/index.html'
                },
                files: [
                    {
                        cwd: '<%= appConfig.dirs.build.dev %>',
                        expand: true,
                        src: [
                            '<%= appConfig.vendorFiles.js %>',
                            '<%= appConfig.appFiles.js %>',
                            '<%= appConfig.appFiles.css %>'
                        ]
                    }
                ]
            }
        }
    };

    grunt.initConfig(grunt.util._.extend(taskConfig, userConfig));

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['build', 'watch']);

    grunt.registerTask('build', ['sync:dev', 'delete_sync:dev', 'injector:dev']);
};