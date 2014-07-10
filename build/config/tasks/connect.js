module.exports = {
    server: {
        options: {
            livereload: true,
            base: '<%= appConfig.dirs.build.dev %>',
            port: '<%= userConfig.port %>' || 9000,
            open: {
                target: 'http://localhost:<%= connect.server.options.port %>',
                appName: '<%= userConfig.browser %>' || 'firefox'
            }
        }
    }
};