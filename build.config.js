module.exports = {
    appConfig: {
        dirs: {
            build: {
                dev: 'build/dev',
                prod: 'build/prod'
            }
        },

        appFiles: {
            js: ['src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js'],
            tests: ['src/**/*.spec.js'],
            appTemplates: ['src/app/**/*.tpl.html'],
            commonTemplates: ['src/common/**/*.tpl.html'],
            scss: ['src/styles/main.scss'],
            html: ['src/index.html']
        },

        vendorFiles: {
            js: [
                'vendor/angular/angular.js',
                'vendor/angular-ui-router/release/angular-ui-router.js'
            ],

            css: []
        }
    }
};
