// assets to be used by the 'hapi-assets' module based on process.env.NODE_ENV
module.exports = {
  development: {
    js: [
      'js/bndl/tail.js'
    ],
    css: [
      'css/bootstrap.css',
      'css/font-awesome/css/font-awesome.css',
      'css/datepicker.css',
      'css/notify.css',
      'js/fullcalendar/bootstrap-fullcalendar.css',
      'css/style.css',
      'css/style-responsive.css',
      'css/to-do.css'
    ]
  },
  production: {
    js: ['js/bndl/tail.min.js'],
    css: ['css/styles.css']
  }
};




