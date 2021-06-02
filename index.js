const express = require('express')
const app = express()
var fs = require('fs')

app.set('view engine','ejs')
app.use('/static', express.static('public'));

app.get('/', (req, res) => res.render('pages/index'))

const port = process.env.PORT || 5500;
app.listen(port , () => console.log('App listening on port ' + port));