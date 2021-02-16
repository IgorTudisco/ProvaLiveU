'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var path = require('path');
var fs = require('fs');


http.createServer(function (req, res) {
    if (req.urq === '/') {
        fs.readFile(
            path.join(__dirname, 'app', 'LiveUCadastro.html'),
            (err, content) => {
                if (err) throw err

                res.end(content)
            }
        );
    }
}).listen(port);

