const express = require('express')
const app = express()
const port = 3000

const staticDir = __dirname + '\\client\\'

app.use(express.static(staticDir))

app.use(express.json())
app.use(express.urlencoded())

app.post('/', function (req, res) {
    res.send(req.body.message)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))