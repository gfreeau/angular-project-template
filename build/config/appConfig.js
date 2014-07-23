module.exports = {
    dirs: {
        build: {
            dev: 'build/targets/dev',
            prod: 'build/targets/prod'
        },
        temp: 'build/temp'
    },
    appFiles: {
        js: ['src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js'],
        tests: ['src/**/*.spec.js'],
        appTemplates: ['src/app/**/*.tpl.html'],
        commonTemplates: ['src/common/**/*.tpl.html'],
        scss: ['src/styles/**/*.scss'],
        html: ['src/index.html']
    },
    vendorFiles: {
        js: [
            'vendor/angular/angular.js',
            'vendor/angular-ui-router/release/angular-ui-router.js'
        ],
        css: []
    }
};
