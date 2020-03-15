const router = require('express').Router();

const handle = require('../handlers');

router.post('/register', handle.register);
router.post('/login', handle.login);
//router.get('/profile', handle.profile);

module.exports = router;