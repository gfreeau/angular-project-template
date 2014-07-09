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
            css: ['src/assets/**/*.css'],
            html: ['src/*.html']
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
