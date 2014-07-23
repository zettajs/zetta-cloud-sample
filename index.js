var zetta = require('../../zetta_runtime.js');
var app = zetta();

app.id = 'd7fe2c66-db23-4513-a5f5-a2a890d1af30';

app
  .name('cloud')
  .expose('*')
  .listen(3002, function(err) {
    if(err) {
      console.log(err);
    }
    console.log('running on http://localhost:3002')
  });
