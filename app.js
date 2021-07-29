// Include express from node_modules and define server related variables
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const exphbs = require('express-handlebars')

// setting static files
app.use(express.static('public'))
app.use('/assets', express.static('assets'))

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//models
const officeList = require('./models/office.json')


// routes setting
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/products', (req, res) => {
  res.render('products', { productsCSS: true })
})

app.get('/product', (req, res) => {
  res.render('product', { productCSS: true })
})

app.get('/csr', (req, res) => {
  res.render('CSR', { csrCSS: true })
})

app.get('/about', (req, res) => {
  console.log(officeList.usa)
  console.log(officeList.eu)
  res.render('about', { aboutCSS: true, offices: officeList })
})

app.get('/cooling', (req, res) => {
  res.render('cooling', { coolCSS: true })
})


app.get('/download', (req, res) => {
  res.render('download', { dlCSS: true })
})




// Listen the server when it started
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})