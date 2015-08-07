// This is the assets controller. Goal is to serve css, js, partials, images, or bower packages.
module.exports = {
  partials: {
    handler: {
      directory: { path: './server/views/partials' }
    },
    app: {
      name: 'partials'
    }
  },
  images: {
    handler: {
      directory: { path: './public/img' }
    },
    app: {
      name: 'images'
    }
  },
  storage: {
    handler: {
      directory: { path: './public/storage' }
    },
    app: {
      name: 'storage'
    }
  },
  css: {
    handler: {
      directory: { path: './public/css' }
    },
    app: {
      name: 'css'
    }
  },
  fonts: {
    handler: {
      directory: { path: './public/fonts' }
    },
    app: {
      name: 'fonts'
    }
  },
  js: {
    handler: {
      directory: { path: './public/js' }
    },
    app: {
      name: 'js'
    }
  },
  bower: {
    handler: {
      directory: { path: './public/bower_components' }
    },
    app: {
      name: 'bower'
    }
  }
};
