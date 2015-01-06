fs = require('fs');
fs.symlink('../models', 'app/node_modules/models');
fs.symlink('../collections', 'app/node_modules/collections');
fs.symlink('../views', 'app/node_modules/views');
fs.symlink('../routers', 'app/node_modules/routers');
fs.symlink('../templates', 'app/node_modules/templates');
