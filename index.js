const express = require('express')
const bodyParser = require('body-parser')
const app = express()

/**app.use('/', function (req, res) {
   res.send('Hello World')
})**/

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router()

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});
app.use('/api', router)
  
app.listen(3000, () => console.log("Its Running on port 3000"))