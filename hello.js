var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
    res.json({ message: 'hello from another api' })
})

module.exports = router