const path = require('path')
const express = require('express')
const hbs = require('hbs')
const cors = require('cors')



const app = express()
const port = process.env.PORT || 4000

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')

app.use(cors())

// Set up handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Set up a static directory to serve
app.use(express.static(publicDirPath))

// Set up route

app.get('/', async (req, res) => {
    await res.render('index', {
        title: 'Bryan Ezeaka'
    })
})


app.listen(port, () => {
    console.log('Server is running on port ' + port)
})