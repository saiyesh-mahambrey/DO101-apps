const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

<<<<<<< HEAD
    response = 'This is version 2 of the app.' + '\n';
=======
    response = 'This is version 3 of the app.' + '\n';
>>>>>>> 314fd50e61595fda6f9fbf547a6f5f9ca6173171

    //send the response to the client
    res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
