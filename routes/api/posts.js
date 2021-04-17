const express = require('express');
const router = express.Router();
const postCtrl = require('../../controllers/api/posts');

router.get('/:id', postCtrl.details)
router.get('/', postCtrl.index)
router.post('/', postCtrl.create)
router.post('/delete/:id', postCtrl.deleteOne)

module.exports = router;