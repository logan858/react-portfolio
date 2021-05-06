const express = require('express');
const router = express.Router();
const postCtrl = require('../../controllers/api/posts');

router.post('/contact', postCtrl.contact)
router.get('/:id', postCtrl.details)
router.get('/', postCtrl.index)

module.exports = router;