const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
        const msg = 'primeira função executada ';
        console.log(msg);
        res.json(msg);
    }
);


router.get('/teste', (req, res, next) => {
        const msg = 'teste';
        console.log(msg);
        res.json(msg);
    }
);

module.exports = router;

