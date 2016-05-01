var router = require('express').Router()

router.use(require('./steps'))
router.use(require('./users'))

module.exports = router
