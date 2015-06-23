// assets to be used by the 'hapi-assets' module based on process.env.NODE_ENV
module.exports = {
  development: {
    js: [
      'js/bndl/tail.js'
    ],
    css: [
      'css/vendor/bootstrap.css',
      'css/vendor/font-awesome/css/font-awesome.css',
      'css/vendor/datepicker.css',
      'css/vendor/ui-core.css',
      'css/vendor/ui-datepicker.css',
      'css/vendor/notify.css',
      // 'js/fullcalendar/bootstrap-fullcalendar.css',
      'css/vendor/style.css',
      'css/vendor/style-responsive.css',
      'css/custom.css'
      // 'css/to-do.css'
    ]
  },
  production: {
    js: ['js/bndl/tail.min.js'],
    css: ['css/styles.css']
  }
};




