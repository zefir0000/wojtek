const express = require('express');
const router = express.Router();

const PagesController = require('../controllers/PagesController');

router.get('/', PagesController.home);
router.get('/hours', PagesController.hours);
router.get('/days', PagesController.days);
router.get('/sign', PagesController.sign);
router.get('/summary', PagesController.summary);
router.get('/dziekujemy', PagesController.dziekujemy);

module.exports = router;
