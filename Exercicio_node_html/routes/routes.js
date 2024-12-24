const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

router.get('/user/:username') {
    res.send(
        `<head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>User Page</title>
         </head>
         <body>
             <h1>Bem-vindo, ${req.params.username}!</h1>
         </body>`
    );
}

module.exports = router;