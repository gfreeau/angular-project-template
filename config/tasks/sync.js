module.exports = {
    dev: {
        files: [
            {
                expand: true,
                src: [
                    '<%= appConfig.appFiles.js %>',
                    '<%= appConfig.vendorFiles.js %>',
                    '<%= appConfig.vendorFiles.css %>'
                ],
                dest: '<%= appConfig.dirs.build.dev %>'
            },
            {
                expand: true,
                flatten: true,
                src: ['<%= appConfig.appFiles.html %>'],
                dest: '<%= appConfig.dirs.build.dev %>'
            }
        ]
    }
};