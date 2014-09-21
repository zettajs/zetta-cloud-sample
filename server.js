var zetta = require('zetta');

var PORT = process.env.PORT || 3000;

zetta()
  .name('cloud')
  .expose('*')
  .listen(PORT, function(err) {
    if(err) {
      console.error(err);
      process.exit(1);
    }
    console.log('running on http://localhost:', PORT)
  });
