module.exports = {
    server: {
        options: {
            livereload: true,
            base: '<%= appConfig.dirs.build.dev %>',
            port: 9000,
            open: {
                target: 'http://localhost:9000',
                appName: '<%= userConfig.browser %>' || 'firefox'
            }
        }
    }
};