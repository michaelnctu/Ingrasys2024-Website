// Include express from node_modules and define server related variables
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
// const port = process.env.PORT
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
  console.log("right now the port number is", port)
  res.render('index')
})

app.get('/server', (req, res) => {
  res.render('./server/server', { productsCSS: true })
})

// server
app.get('/sv2080a', (req, res) => {
  res.render('./server/sv2080a', { productCSS: true })
})

app.get('/sv2081a', (req, res) => {
  res.render('./server/sv2081a', { productCSS: true })
})

app.get('/sv2020a', (req, res) => {
  res.render('./server/sv2020a', { productCSS: true })
})
app.get('/sv1020i', (req, res) => {
  res.render('./server/sv1020i', { productCSS: true })
})

// storage
app.get('/es2000', (req, res) => {
  res.render('./storage/es2000', { productCSS: true })
})

// GPU AI

app.get('/accelerator', (req, res) => {
  res.render('./accelerator/accelerator', { productsCSS: true })
})


app.get('/gb8011', (req, res) => {
  res.render('./accelerator/gb8011', { productCSS: true })
})

app.get('/eb3000', (req, res) => {
  res.render('./accelerator/eb3000', { productCSS: true })
})

// workstation
app.get('/ws5010a', (req, res) => {
  res.render('./workstation/ws5010a', { productCSS: true })
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

app.get('/cdi', (req, res) => {
  res.render('cdi', { cdiCSS: true })
})


app.get('/download', (req, res) => {
  res.render('download', { dlCSS: true })
})




// // Listen the server when it started
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})