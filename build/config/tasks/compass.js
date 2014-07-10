module.exports = {
    dev: {
        options: {
            sassDir: 'src/styles',
            cssDir: '<%= appConfig.dirs.build.dev %>/assets/styles',
            noLineComments: true
        }
    }
};