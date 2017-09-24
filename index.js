var http = require('http')
    ,app = require('./config/express')
    db = require('./config/database');

    app.use(express.static(path.resolve(__dirname + '/public/index.html')));

http.createServer(app).listen(3000, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});

