const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    res.sendFile('ranking.html', { root: './Web' });
});

module.exports = router;