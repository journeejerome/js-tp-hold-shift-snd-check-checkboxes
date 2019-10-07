// eslint-disable-next-line no-undef,import/no-extraneous-dependencies
const mix = require('laravel-mix');

mix
  .sass('src/sass/style.scss', 'css/min.style.css')
  .browserSync({
    proxy: false,
    browser: 'google chrome',
    server: {
      baseDir: './',
    },
    files: ['js/*.js', 'src/sass/**/*.scss', '**/*.html', '**/*.php'],
  })
  .options({
    processCssUrls: false,
  });
