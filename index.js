var http = require('http')
    ,app = require('./config/express')
    db = require('./config/database');

    http.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
        console.log('running...');
});

